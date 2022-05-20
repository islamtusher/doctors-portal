import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import Loading from '../loading/Loading';
import useUserToken from '../hooks/useUserToken';

const Login = () => {
    const [user] = useAuthState(auth) // current User
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    // react form hooks
    const { register, handleSubmit, reset,getValues, formState: { errors } } = useForm(); 
    // // custom Hooks
    // const [token] = useUserToken(user)
    
    // react firebase hooks
    const [signInWithGoogle, ,googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword, , loading, emailPassSignInError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
     // Errors by react firebase hooks
    const [hooksErrors, setHooksErrors] = useState({emailError : '', passwordError: ''})
    
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast('User LogIn')
            reset()
        }
    }, [user, reset, from, navigate])


    // handle Password Reset
    const handleresetPassword = async() => {
        const email = getValues('email')
        await sendPasswordResetEmail(email)
        toast('Reset Password Email Sended')
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
        <div className='w-[385px] mx-auto shadow-lg mt-8 px-5 pt-5 pb-7 rounded-lg '>
            { sending && <Loading data="Sending"></Loading>}
            <h3 className='text-center text-2xl'>LOGIN</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    {/* onChange={()=>getUserEmail(getValues("email"))} */}
                    <input  type='email' className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("email", { required: true})}/>
                    {hooksErrors.emailError && <p className='text-red-500'>{hooksErrors.emailError}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input type='password' className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("password", { required: true})}/>
                    {hooksErrors.passwordError && <p className='text-red-500'>{hooksErrors.passwordError}</p>}
                    <p onClick={handleresetPassword} className='cursor-pointer mt-1'>Forget Password?</p>
                </div>

                <button className="btn btn-accent text-base-500 w-full mt-6 mb-2" type='submit'>LOGIN</button>
                <p className='text-center text-sm '>New To Doctors Portal? <span onClick={()=>navigate('/signup')} className='text-primary cursor-pointer'>Create A New Account</span></p>
            </form>

            <div className="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
        </div>
    );
};

export default Login;