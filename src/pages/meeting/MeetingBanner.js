
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MeetingBanner = ({date, setDate}) => {
    return (
        <div className="hero min-h-[90vh] bg-[url('/public/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-1/2 flex justify-center md:justify-end ">
                    <img src="./assets/images/chair.png" className="lg:w-11/12 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='lg:w-1/2 mt-11 lg:mt-0 '>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default MeetingBanner;