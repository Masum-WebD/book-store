import React from "react";
import ItemsContainer from "./ItemsContainer";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import "./Footer.css";

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
          <FaCcPaypal /> <FaCcVisa /> <SiMastercard /> <SiAmericanexpress/>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
