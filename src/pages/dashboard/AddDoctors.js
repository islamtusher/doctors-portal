import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebaseConfig';

const AddDoctors = () => {
    const [user] = useAuthState(auth) // current User
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // react form hooks

    const { data: services, isLoading, refetch } = useQuery(['servicesData', user], () =>
        fetch(`http://localhost:5000/availableServices`)
        .then(res => res.json())
    )

    const imageApiKey = 'edc8d4e921a65908d428d43888b23e70'

    // Handle Sing Up form
    const onSubmit = async (data) => {
        const doctorImage = data?.image[0] 
        const formData = new FormData()
        formData.append('image', doctorImage)
        fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success === true) {
                    const doctorInfo = {
                        name: data?.name,
                        email: data?.email,
                        apecialisation: data?.specialisation,
                        image: result?.data?.url
                    }
                    // Store the doctor Info on DB
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                toast('Doctor Add Successfully')
                                reset() // reset input filds
                            }
                            else {
                                toast.error('Something Wrong Please Check')
                            }
                        })
                }
        })

        
        
    }

    // reset form inputs & signUp conformation
    useEffect(() => {
    }, [user])

   
    return (
        <div>
            <h1>Add Dotors</h1>
            <div className="">
            {/* {user && loading && <Loading data='Please Verify Your Email Firstly'></Loading>} //rmv varify loading */}
            <div className='w-[385px] mx-auto shadow-lg px-5 mt-12 pt-5 pb-7 rounded-lg '>
                <h3 className='text-center text-2xl'>ADD AN DOCTORS</h3>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input
                            type='text'
                            className="input input-bordered focus:input-primary focus:border-0 w-full "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                })
                                }
                            />
                            {errors?.email?.type === 'required' && <p className='text-red-500'>{errors?.name?.message}</p>}
                            
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
                       
                    </div>
                     
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-lg">Specialisation</span>
                        </label>
                        <select  className="select input-bordered focus:input-primary focus:border-0 w-full" {...register("specialisation", { required: true})}>
                            {
                                services?.map((service, index) => <option key={index} value={service.name}>{service.name}</option>)
                            } 
                        </select>   
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Image</span>
                            </label>
                            <input
                                type='file'
                                className="input w-full "
                                {...register("image", { required: true })}
                            />
                        </div>
                        
                    <button type='submit' className="btn btn-accent text-base-500 w-full mt-8 " >Add Doctors</button>
                    
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddDoctors;