import React from 'react';

const Review = ({ review }) => {
    const {name, picture, country, describe} = review
    return (
        <div className="card shadow-md p-8">
            <p>{describe}</p>
            <div className="flex items-center  mt-10">
                <figure><img className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={picture} alt="Movie" /></figure>
                <div className="ml-6 ">
                    <h2 className="card-title text-accent">{name}</h2>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;