import React, { useEffect, useState } from 'react';
import Review from './review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='reviews'>
            <div className="flex justify-between items-center px-12 my-28">
                <div className="">
                    <p className="sub-title text-primary text-xl uppercase">OUR Testimonial</p>
                    <h1 className="main-title text-4xl">What Our Patients Says</h1>
                </div>
                <img className='w-24 lg:w-48 ' src="./assets/icons/quote.svg" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-16 px-6 lg:px-20 my-28">
            {
                reviews?.map(review => <Review key={review._id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;