import React from 'react';

const InfoCard = ({image, bgGradient}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgGradient}`}>
            <figure className='p-5 text-white'><img src={image} alt="card-img" /></figure>
            <div className="card-body px-5 text-white">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;