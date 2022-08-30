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
<<<<<<< HEAD
    <div className="footer-bg lg:flex text-gray-800 justify-evenly gap-6 sm:px-8 px-5 py-16">
      <div className="my-auto text-left ">
        <img src={logo} className="h-[50px] w-[190px]" alt="" />
        <p className="mt-3">
          BookShop is a leading online book store <br /> all over the world. its
          total books <br /> numbers is 1000+ and counting. we can <br /> asure
          you that you will get the best <br /> product from us.
        </p>
      </div>
      <Item Links={QuickLinks} title="Quick Links" />
      <Item Links={CustomerAreas} title="Customer Area" />
      <Item Links={PopularCategory} title="Popular Category" />
      <Item Links={SocialMedia} title="Social Media" />
=======
    <div className="lg:flex text-neutral justify-evenly gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="CONTACT US" />
      <Item Links={RESOURCES} title="INFORMATION" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
>>>>>>> 6620c76314bf0aa478fbc6b7a28565049185c267
    </div>
  );
};

export default ItemsContainer;
