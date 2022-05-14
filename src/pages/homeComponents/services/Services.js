import React, { useEffect, useState } from 'react';
import Service from './service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="">
            <div className="text-center mb-28">
                <p className="sub-title text-primary text-xl">OUR SERVICES</p>
                <h1 className="main-title text-4xl">Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7 px-5 my-28'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;