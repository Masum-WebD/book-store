import React from "react";
import { FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress, SiMastercard } from "react-icons/si";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <ItemsContainer />
      <div
        className="grid under-footer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      my-auto pt-2 text-black items-center text-sm pb-8"
      >
        <span>© 2022 Book Store. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span className="text-3xl text-gray-500 flex gap-3">
          <FaCcPaypal /> <FaCcVisa /> <SiMastercard /> <SiAmericanexpress top='1000' />
        </span>
      </div>
      <ScrollToTop smooth />
      
    </footer>
  );
};

export default Footer;
