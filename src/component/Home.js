import React from 'react';
import AllProducts from './AllProducts';
import AllTopProducts from './AllTopProducts';
import Banner from './Banner';
import Delivery from './Delivery';
import DiscountBanner from './DiscountBanner';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <AllProducts />
            <DiscountBanner />
            <AllTopProducts />
            <Delivery />
            <Subscribe />
        </div>
    );
};

export default Home;