import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="hero xl:w-11/12 mx-auto  min-h-[90vh] bg-[url('/public/assets/images/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 flex justify-center md:justify-end ">
                        <img src="./assets/images/chair.png" className="lg:w-11/12 rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:w-1/2 mt-11 lg:mt-0'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn banner-btn border-0 text-sm text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;