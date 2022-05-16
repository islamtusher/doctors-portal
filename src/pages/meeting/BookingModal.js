import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ service, date, setService }) => {
    const handleBookingForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const slot = e.target.time.value
        const date = e.target.date.value
        console.log(date);
        setService(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> 
                    <h3 className="font-bold text-lg">Appointment for <span className='text-primary text-2xl'>{ service?.name}</span></h3>
                    <form onSubmit={handleBookingForm} className="flex flex-col gap-y-5 mt-7">
                        <input name='date' disabled type="text" placeholder="" value={format(date, 'PP')} className="input  input-bordered focus:input-primary focus:border-0 w-full " />
                        <select name='time' className="select input-bordered focus:input-primary focus:border-0 w-full">
                            {
                                service?.slots?.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input  input-bordered focus:input-primary focus:border-0 w-full " />
                        <input name='phone' type="tel" placeholder="Phone Number" className="input  input-bordered focus:input-primary focus:border-0 w-full " />
                        <input name='email' type="text" placeholder="Email" className="input  input-bordered focus:input-primary focus:border-0 w-full " />
                        <button type='submit' className='btn btn-prilmary w-full'>SUBMIT</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;