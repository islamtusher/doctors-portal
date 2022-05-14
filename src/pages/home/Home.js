import React from 'react';
import Banner from '../homeComponents/banner/Banner';
import Info from '../homeComponents/info/Info';
import InfoCard from '../homeComponents/info/infoCard/InfoCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            {/* <InfoCard></InfoCard> */}
        </div>
    );
};

export default Home;