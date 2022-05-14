import React from 'react';
import Banner from '../homeComponents/banner/Banner';
import Info from '../homeComponents/info/Info';
import Services from '../homeComponents/services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;