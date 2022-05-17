import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const Login = () => {
    // const [error, setError] = useState('')
    // react hooks form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(() => {
        // console.log(user);
        console.log(error);

    }, [user, error])
    
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='w-[385px] mx-auto shadow-lg mt-8 px-5 pt-5 pb-7 rounded-lg '>
            <h3 className='text-center text-2xl'>LOGIN</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("email", { required: true})}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("password", { required: true})}/>
                    <p className='cursor-pointer mt-1'>Forget Password?</p>
                </div>
                <button className="btn btn-accent text-base-500 w-full mt-6 mb-2" type='submit'>LOGIN</button>
                <p className='text-center text-sm '>New To Doctors Portal? <span className='text-primary cursor-pointer'>Create A New Account</span></p>
            </form>
            <div className="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
        </div>
    );
};

export default Login;