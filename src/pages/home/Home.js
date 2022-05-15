import React from 'react';
import About from '../homeComponents/about/About';
import Appointment from '../homeComponents/appointment/Appointment';
import Banner from '../homeComponents/banner/Banner';
import Contact from '../homeComponents/contact/Contact';
import Info from '../homeComponents/info/Info';
import Reviews from '../homeComponents/reviews/Reviews';
import Services from '../homeComponents/services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;