import React from "react";
import AllProducts from "./AllProducts";
import AllTopProducts from "./AllTopProducts";
import Banner from "./Banner";
import Delivery from "./Delivery";
import DiscountBanner from "./DiscountBanner";
import ThirtyPercent from "./DiscountProducts.js/ThirtyPercent";
import TweentyPercent from "./DiscountProducts.js/TweentyPercent";
import Features from "./Features";
import PageTitle from "./PageTitle";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"/>
        <Banner/>
      <div className="container mx-auto max-w-[1196px]">
        <Features />

        <AllProducts />
        <DiscountBanner />

        <TweentyPercent />
        <ThirtyPercent />
        <AllTopProducts />

        <Delivery />
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
