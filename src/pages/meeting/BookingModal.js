import React, { useState } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

const BookingModal = ({ service, date, setService }) => {
    const[error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        data['treatmentName'] = service?.name
        if (!/\S+@\S+\.\S+/.test(data?.email)) {
            setError('Please Enter a Valid Email')
            return
        }
        setError('')
        console.log(data);
        fetch('http://localhost:5000/bookingInfo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> 
                    <h3 className="font-bold text-lg">Appointment for <span className='text-primary text-2xl'>{ service?.name}</span></h3>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-7">
                        <input   readOnly value={format(date, 'PP')} className="input input-bordered bg-slate-300 focus:border-0 w-full" {...register("date")}/>
                        <select  className="select input-bordered focus:input-primary focus:border-0 w-full" {...register("time", { required: true})}>
                            {
                                service?.slots?.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input   placeholder="Full Name" className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("firstName", { required: true})}/>
                        <input   type="tel" placeholder="Phone Number" className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("phone", { required: true})}/>
                        <input   placeholder="Email" className="input input-bordered focus:input-primary focus:border-0 w-full " {...register("email", { required: true})}/>
                        {error && <p className='text-orange-600'>{error}</p>}
                        <button type='submit' className='btn btn-prilmary w-full'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;