import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center py-16 px-6 bg-[url("/public/assets/images/appointment.png")]'>
            <div class=" w-11/12 sm:w-[450px] text-center ">
                <div class="flex flex-col gap-4">
                    <div className="">
                        <p className="sub-title text-primary text-xl">CONTACT US</p>
                        <h1 className="main-title text-3xl text-white">Stay connected with us</h1>
                    </div>
                    <input className='py-2 pl-3 rounded' type="email" placeholder='Email' name='email' />
                    <input className='py-2 pl-3 rounded' type="phone" placeholder='Phone' name='phone' />
                    <textarea className='pt-2 pl-3 rounded' name="message" placeholder='Your Message' id="" cols="30" rows="5"></textarea>
                    <div class="">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;