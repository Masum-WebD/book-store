import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/Images/logo.png";

const Header = () => {
  return (
    <div class="navbar bg-primary fixed top-0 z-50">
      <div class="navbar-start lg:mx-5">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="">SHOP</Link>
            </li>
            <li>
              <Link to=" ">CATEGORY</Link>
            </li>
            <li>
              <Link to=" ">FEATURES</Link>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href=" ">
          <img className="lg:w-48 w-36 text-white" src={logo} alt="" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white font-semibold">
          <li className="hover:bg-secondary">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to="">SHOP</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to=" ">CATEGORY</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to=" ">FEATURES</Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end mx-5 d-flex text-white  font-bold">
        <Link to="">
          <FontAwesomeIcon className="mr-5 h-6" icon={faCartShopping} />
        </Link>
        <div class="">
          <Link to='/login' class="btn text-white">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
