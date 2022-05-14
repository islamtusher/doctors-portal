import React from 'react';
import './Info.css'
import InfoCard from './infoCard/InfoCard';

const Info = () => {
    return (
        <div className='card-contain grid grid-cols-1 md:grid-cols-3 gap-7 px-7 mt-12 mb-36'>
            <InfoCard
                image={"./assets/icons/clock.svg"}
                bgGradient={"bg-gradient-to-r from-secondary to-primary"}>
            </InfoCard>
            <InfoCard
                image={"./assets/icons/marker.svg"}
                bgGradient={"bg-accent"}>
            </InfoCard>
            <InfoCard
                image={"./assets/icons/phone.svg"}
                bgGradient={"bg-gradient-to-r from-secondary to-primary"}>
            </InfoCard>
        </div>
    );
};

export default Info;