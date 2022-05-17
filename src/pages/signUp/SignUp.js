import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const[error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors.email.message);
    }
    return (
        <div className="">
            <div className='w-[385px] mx-auto shadow-lg px-5 mt-16 pt-5 pb-7 rounded-lg '>
                <h3 className='text-center text-2xl'>LOGIN</h3>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Name</span>
                        </label>
                        <input
                            type='text'
                            className="input input-bordered focus:input-primary focus:border-0 w-full "
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Email</span>
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
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-lg">Password</span>
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
                        <p className='cursor-pointer mt-1'>Forget Password?</p>
                    </div>
                    <button type='submit' className="btn btn-accent text-base-500 w-full mt-6 mb-2" >LOGIN</button>
                    <p className='text-center text-sm '>
                        New To Doctors Portal?
                        <span className='text-primary cursor-pointer'> Create A New Account</span>
                    </p>
                </form>

                <div className="divider">OR</div>
                <button className="btn bg-white text-accent uppercase font-normal hover:border-secondary hover:bg-white hover:text-secondary w-full " type='submit'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SignUp;