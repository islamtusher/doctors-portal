import React from 'react';

const Appointment = () => {
    return (
        <div className="bg-[url('/public/assets/images/appointment.png')] ">
             <div class="card lg:card-side lg:items-center my-12 h-[533px] overflow-t-visible ">
            <figure className='lg:w-1/2'>
                <img className='' src="./assets/images/doctor-small.png" alt="Album" />
            </figure>
            <div class=" lg:w-1/2">
                <div className="card-body gap-6 lg:w-4/5 w-full">
                    <h2 class="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                    <p className='grow-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div class="">
                        <button class="btn px-5 banner-btn border-0 text-sm text-white bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Appointment;