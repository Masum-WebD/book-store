import React from "react";
import Item from "./Item";
import {
  QuickLinks,
  CustomerAreas,
  PopularCategory,
  SocialMedia,
} from "./Menus";
import logo from "../../asset/Images/logo.png";

const ItemsContainer = () => {
  return (
    <div className="footer-bg lg:flex text-gray-800 justify-evenly gap-6 sm:px-8 px-5 py-16">
      <div className="my-auto text-left mb-5 lg:mb-0">
        <img src={logo} className="h-[50px] w-[190px]" alt="" />
        <p className="mt-3 ml-[4px]">
          BookShop is a leading online book store <br /> all over the world. its
          total books <br /> numbers is 1000+ and counting. we can <br /> asure
          you that you will get the best <br /> product from us.
        </p>
      </div>
      <Item Links={QuickLinks} title="Quick Links" />
      <Item Links={CustomerAreas} title="Customer Area" />
      <Item Links={PopularCategory} title="Popular Category" />
      <Item Links={SocialMedia} title="Social Media" />
    </div>
  );
};

export default ItemsContainer;