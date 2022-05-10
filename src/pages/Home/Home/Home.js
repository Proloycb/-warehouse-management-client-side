import React from 'react';
import AllNews from '../../AllNews/AllNews';
import ServiceProvide from '../../ServiceProvide/ServiceProvide';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceProvide/>
            <Inventories/>
            <AllNews/>
        </div>
    );
};

export default Home;