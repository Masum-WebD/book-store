import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";
import userProfile from "../../asset/Icons/user.png";
import { FcBriefcase } from "react-icons/fc";
import PageTitle from "../PageTitle";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer max-w-[1196px] mx-auto drawer-mobile mt-16">
      <PageTitle title="Dashboard" />
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        <div className="navbar bg-red">
          <label
            for="my-drawer-2"
            tabIndex="0"
            className="btn btn-ghost  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>

        <Outlet></Outlet>
      </div>
      <div className=""></div>
      <div className="drawer-side drawer-mobile h-full border-r-2 rounded-md border-purple-300 bg-purple-50">
        <label for="my-drawer-2 bg-red" className="drawer-overlay">kichhu lekah</label>
        <div className="menu overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-5 rounded-md">
            <li>
              <Link to="/dashboard/myAccount">
                <div className="flex flex-col items-center gap-2 ml-3">
                  <div class="avatar">
                    <div class="w-10 rounded-full ring ring-gray-700 ring-offset-base-100 ring-offset-2">
                      <img
                        src={user?.photoURL ? user.photoURL : userProfile}
                        alt=""
                      />
                    </div>
                  </div>

                  {!admin && (
                    <p className="text-black text-sm lg:text-base">
                      {user?.displayName}
                    </p>
                  )}
                  {admin && (
                    <div>
                      <p className="text-black text-sm lg:text-base">
                        {user?.displayName}
                      </p>
                      <p className="badge">Admin</p>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          </div>
          <div className="h-[3px] w-[120px] bg-pink-300 mt-2 mx-auto"></div>
          <ul className="menu overflow-auto px-4 w-56 text-gray-700">
            <>
              {!admin && (
                <>
                  <li>
                    <Link to="/dashboard/order">
                      {<FcBriefcase />}My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myReview">My Review</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/wishlist">My Wishlist</Link>
                  </li>
                </>
              )}
              {admin && (
                <>
                  <li className="mt-3">
                    <Link to="/dashboard">
                      <MdDashboard />
                      Dashboard
                    </Link>
                  </li>
                  <div class="collapse collapse-arrow">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title">
                      <Link
                        to="/dashboard/addProduct"
                        className="flex items-center gap-3"
                      >
                        <RiShoppingBag3Fill />
                        Products{" "}
                      </Link>
                    </div>
                    <div class="collapse-content flex flex-col text-left ml-10">
                      <Link to="/dashboard/productList">List</Link>
                      <Link to="/dashboard/addProduct" className="mt-3">
                        Add Product{" "}
                      </Link>
                    </div>
                  </div>
                  <div class="collapse collapse-arrow">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title">
                      <Link
                        to="/dashboard/addProduct"
                        className="flex items-center gap-3"
                      >
                        <TiShoppingCart />
                        Orders{" "}
                      </Link>
                    </div>
                    <div class="collapse-content flex flex-col text-left ml-10">
                      <Link to="/dashboard/manageOrders">List</Link>
                      <Link to="/dashboard/addProduct" className="mt-3">
                        Details
                      </Link>
                    </div>
                  </div>
                  <div class="collapse collapse-arrow">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title">
                      <Link
                        to="/dashboard/addProduct"
                        className="flex items-center gap-3"
                      >
                        <IoPersonSharp />
                        Customers{" "}
                      </Link>
                    </div>
                    <div class="collapse-content flex flex-col text-left ml-10">
                      <Link to="/dashboard/manageUsers">List</Link>
                      <Link to="/dashboard/addProduct" className="mt-3">
                        Details
                      </Link>
                    </div>
                  </div>
                  <li>
                    <Link to="/dashboard/manageUsers">
                      <FaShippingFast />
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageOrders">
                      <MdLocalOffer />
                      Discount
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/wishlist">
                      <FiSettings />
                      Settings
                    </Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
