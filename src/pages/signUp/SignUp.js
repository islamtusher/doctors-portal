import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const[error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className="">
            <div className='w-[385px] mx-auto shadow-lg px-5 mt-16 pt-5 pb-7 rounded-lg '>
                <h3 className='text-center text-2xl'>LOGIN</h3>
                <form className='flex flex-col mt-4'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Name</span>
                        </label>
                        <input className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("name", { required: true})}/>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Email</span>
                        </label>
                        <input className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("email", { required: true})}/>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Password</span>
                        </label>
                        <input className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("password", { required: true})}/>
                        <p className='cursor-pointer mt-1'>Forget Password?</p>
                    </div>
                    <button className="btn btn-accent text-base-500 w-full mt-6 mb-2" type='submit'>LOGIN</button>
                    <p className='text-center text-sm '>New To Doctors Portal? <span className='text-primary cursor-pointer'>Create A New Account</span></p>
                </form>
                <div className="divider">OR</div>
                <button className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SignUp;