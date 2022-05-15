import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([])
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
                    <div class="card  shadow-md">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-secondary uppercase">{service?.name}</h2>
                            <p>We are using cookies for no reason.</p>
                            <div class="card-actions justify-center">
                                <button class="btn px-5 mt-6 banner-btn border-0 text-sm text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                            </div>
                        </div>
                    </div>)
            }
            </div>

        </div>
    );
};

export default AvailableServices;