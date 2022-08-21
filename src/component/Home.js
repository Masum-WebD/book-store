import React from 'react';
import AllProducts from './AllProducts';
import AllTopProducts from './AllTopProducts';
import Banner from './Banner';
import Delivery from './Delivery';
import DiscountBanner from './DiscountBanner';
import FiftyPercent from './DiscountProducts.js/FiftyPercent';
import ThirtyPercent from './DiscountProducts.js/ThirtyPercent';
import TinyFiftyPercent from './DiscountProducts.js/TinyFiftyPercent';
import TweentyPercent from './DiscountProducts.js/TweentyPercent';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <TinyFiftyPercent/>
            <Banner />
            <AllProducts />
            <DiscountBanner />
            <AllTopProducts />
            <FiftyPercent/>
            <TweentyPercent/>
            <ThirtyPercent/>
            <Delivery />
            <Subscribe />
        </div>
    );
};

export default Home;