import React from 'react';

const Appointment = () => {
    return (
        
        <div class="card overflow-visible lg:card-side lg:items-center rounded-none bg-[url('/public/assets/images/appointment.png')]">
            <figure className='lg:w-1/2'>
                <img className=' mt-[-150px]  hidden lg:block' src="./assets/images/doctor-small.png" alt="Album" />
            </figure>
            <div class=" lg:w-1/2">
                <div  iv className="card-body gap-6 lg:w-4/5 w-full text-white">
                    <h2 class="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                    <p className='grow-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div class="">
                        <button class="btn px-5 banner-btn border-0 text-sm text-white bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default Appointment;