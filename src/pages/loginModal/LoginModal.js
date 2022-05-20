import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginModal = () => {
    const [user] = useAuthState(auth) // current User
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks
    const[hooksErrors, setHooksErrors] = useState({emailError : '', passwordError: ''}) // Errors by react firebase hooks

    // react firebase hooks
    const [signInWithGoogle, ,googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword, , loading, emailPassSignInError] = useSignInWithEmailAndPassword(auth);
    
    useEffect(() => {
        if (user) {
            // navigate(from, { replace: true });
            toast('User LogIn')
            reset()
            document.getElementById('login-modal').checked = false
        }
    }, [user, reset])
    //navigateToSignupModal
    const navigateToSignupModal = () => {
        document.getElementById('signup-modal').checked = true
        document.getElementById('login-modal').checked = false
    }
    
    // Handle Login Form
    const onSubmit = data => {
        signInWithEmailAndPassword(data?.email, data?.password)
    }
    
    // handle Firebase hooks errors
    useEffect(() => {
        const hookError = emailPassSignInError || googleSignInError
        if (hookError) {
            switch (hookError.code) {
                case 'auth/invalid-email':
                    setHooksErrors({...hooksErrors, emailError:'Please Enter A valid Email'})
                    break;
                case 'auth/user-not-found':
                    
                    setHooksErrors({...hooksErrors, emailError:'This Email Not Registered'})
                    break;
                case 'auth/wrong-password':
                    setHooksErrors({...hookError, passwordError:'Wrong Password'})
                    break;
                case 'auth/popup-closed-by-user':
                    toast('Google Sign In Canceled By User')
                    break;
                default:
                    alert('Somthing is Wrong! Please Check') //rmv convert to modal----------------
                    break;
            }
        }
    },[emailPassSignInError, googleSignInError])
    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="login-modal"className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-center text-2xl'>LOGIN</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type='email' className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("email", { required: true})}/>
                            {hooksErrors.emailError && <p className='text-red-500'>{hooksErrors.emailError}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type='password' className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("password", { required: true})}/>
                            {hooksErrors.passwordError && <p className='text-red-500'>{hooksErrors.passwordError}</p>}
                            <p className='cursor-pointer mt-1'>Forget Password?</p>
                        </div>

                        <button className="btn btn-accent text-base-500 w-full mt-6 mb-2" type='submit'>LOGIN</button>
                        <p className='text-center text-sm '>New To Doctors Portal? <span onClick={navigateToSignupModal} className='text-primary cursor-pointer'>Create A New Account</span></p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()} className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;