import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";
import ItemsContainer from "./ItemsContainer";
import paypal from "../../asset/Icons/paypal.png";
import visa from "../../asset/Icons/visa.png";
import masterCard from "../../asset/Icons/mastercard-26128.png";
import americanExpress from "../../asset/Icons/american-express.png";

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <ItemsContainer />
      <div
        className="grid under-footer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      my-auto pt-6 text-black items-center text-sm pb-8"
      >
        <span>© 2022 Book Store. All rights reserved.</span>
        <a href="/term"><span>Terms · Privacy Policy</span></a>
        <div className="flex mx-auto">
          <img className="w-14 mx-2" src={paypal} alt="" />
          <img className="w-14 mx-2" src={visa} alt="" />
          <img className="w-14 mx-2" src={masterCard} alt="" />
          <img className="w-14 mx-2" src={americanExpress} alt="" />
        </div>
      </div>
      <ScrollToTop color="primary" smooth />

    </footer>
  );
};

export default Footer;
