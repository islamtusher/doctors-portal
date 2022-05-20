import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebaseConfig';

const SignupModal = () => {
    const [user] = useAuthState(auth) // current User
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const[hooksError, setHooksError] = useState('') // Errors by react firebase hooks
    
    // react firebse Hooks
    const [createUserWithEmailAndPassword, ,creatingUserLoading, creatingUserError,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, ,googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, profileUpdatingError] = useUpdateProfile(auth);
    
    // Handle Sing Up form
    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

    // reset form inputs & signUp conformation
    useEffect(() => {
        if (user) {
            navigate('/')
            toast('New User Register')
            reset()
            document.getElementById('login-modal').checked = false
        }
    }, [user, reset, navigate])

    // handle react firebase hooks Errors
    useEffect(() => {
        const hookError = creatingUserError || googleSignInError
        if (hookError) {
            switch (hookError?.code) {
                case 'auth/email-already-in-use':
                    setHooksError('Email Is Allready Registered')
                    break;  
                case 'auth/popup-closed-by-user':
                    toast('Google Sign In Canceled By User')
                    break;  
                default:
                    setHooksError('Somthig Is Worng Please Check')
                    break;
            }
        }
    }, [creatingUserError, googleSignInError])
    return (
        <div>
            <input type="checkbox" id="signup-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="signup-modal"className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-center text-2xl'>LOGIN</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input
                                type='text'
                                className="input input-bordered focus:input-primary focus:border-0 w-full "
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input
                                type='email'
                                className="input input-bordered focus:input-primary focus:border-0 w-full "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide A Valid Email'
                                    }})
                                }
                            />
                            {errors?.email?.type === 'required' && <p className='text-red-500'>{errors?.email?.message}</p>}
                            {errors?.email?.type === 'pattern' && <p className='text-red-500'>{errors?.email?.message}</p>}
                            {hooksError && <p className='text-red-500'>{hooksError}</p> }
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input
                                type='password'
                                autoComplete='current-password'
                                className="input input-bordered focus:input-primary focus:border-0 w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Must Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Need Minimum 6 characters'
                                    },
                                    pattern: {
                                        value: /(?=.*[!@#$%^&*])/,
                                        message: 'Need Minimum 1 Special Character'
                                    }
                                })}
                            />
                            {errors?.password?.type === 'required' && <p className='text-red-500'>{errors?.password?.message}</p>}
                            {errors?.password?.type === 'minLength' && <p className='text-red-500'>{errors?.password?.message}</p>}
                            {errors?.password?.type === 'pattern' && <p className='text-red-500'>{errors?.password?.message}</p>}
                            {/* <p className='cursor-pointer mt-1'>Forget Password?</p> */}
                        </div>
                        <button type='submit' className="btn btn-accent text-base-500 w-full mt-6 mb-2" >SIGN UP</button>
                        <p className='text-center text-sm '>
                            Allready Registered?
                            <span onClick={()=>navigate('/login')} className='text-primary cursor-pointer'> Please Log In</span>
                        </p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()} className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
                    {/* <div className="modal-action">
                        <label htmlFor="login-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SignupModal;