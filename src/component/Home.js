import React from 'react';
import AllProducts from './AllProducts';
import AllTopProducts from './AllTopProducts';
import Banner from './Banner';
import Delivery from './Delivery';
import DiscountBanner from './DiscountBanner';
import ThirtyPercent from './DiscountProducts.js/ThirtyPercent';
import TweentyPercent from './DiscountProducts.js/TweentyPercent';
import Features from './Features';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />

            <AllProducts />
            <DiscountBanner />


            <TweentyPercent />
            <ThirtyPercent />
            <AllTopProducts />

            <Delivery />
            <Subscribe />
        </div>
    );
};

export default Home;