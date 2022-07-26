import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        <div className="navbar ">
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
          <h2 className="text-3xl  text-black">Dashboard </h2>
        </div>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side drawer-mobile">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-green-600 text-white">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/order">MY ORDERS</Link>
          </li>
          <>
            <li>
              <Link to="/dashboard/user">USERS</Link>
            </li>
            <li>
              <Link to="/dashboard/manageOrders">MANAGE ALL PRODUCTS</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">ADD PRODUCTS</Link>
            </li>
            <li>
              <Link to="/dashboard/payment">PAYMENT</Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
