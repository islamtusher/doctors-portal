import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([])
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('availableServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-20">
                <h1 className='main-title text-primary text-2xl uppercase'>Available Services on {format(date, 'PP')}</h1>
                <p className='sub-title text-xl text-accent'>Please select a service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20 my-28">
            {
                services.map(service =>
                    <div key={service._id} setService={setService}  class="card  shadow-md">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-secondary uppercase">{service?.name}</h2>
                            <p>{service?.slots?.length > 0 ?
                                <span>{service?.slots[0]}</span>
                                :
                                <span className='text-orange-600'>No Slots Available</span>}
                            </p>
                            <div class="card-actions justify-center">
                                <label
                                    for="booking-modal"
                                    onClick={()=>setService(service)}
                                    disabled={!service?.slots?.length > 0}
                                    class="btn modal-button px-5 mt-6 banner-btn border-0 text-white bg-gradient-to-r from-secondary to-primary">
                                    Book Appointment
                                </label>        
                            </div>
                        </div>
                    </div>)
            }
            </div>
            {service && <BookingModal service={service}></BookingModal>}
        </div>
    );
};

export default AvailableServices;