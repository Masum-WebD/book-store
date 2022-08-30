import React from 'react';
import AllProducts from './AllProducts';
import AllTopProducts from './AllTopProducts';
import Banner from './Banner';
import Delivery from './Delivery';
import DiscountBanner from './DiscountBanner';
import Features from './Features';
import PageTitle from './PageTitle';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Banner />
            <Features />
            <AllProducts />
            <DiscountBanner />
            <AllTopProducts />
            <Delivery />
            <Subscribe />
        </div>
    );
};

export default Home;