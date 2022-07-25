import React from 'react';
import AllProducts from './AllProducts';
import AllTopProducts from './AllTopProducts';
import Banner from './Banner';
import DiscountBanner from './DiscountBanner';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <AllProducts />
            <DiscountBanner />
            <AllTopProducts />
            <Subscribe />
        </div>
    );
};

export default Home;