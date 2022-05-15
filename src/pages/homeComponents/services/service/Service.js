import React from 'react';

const Service = ({ service }) => {
    const { picture, name, describe } = service
    console.log(picture);
    return (
        <div className="card shadow-md">
            <figure className="px-10 pt-10">
                <img src={service?.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{describe}</p>
            </div>
        </div>
    );
};

export default Service;