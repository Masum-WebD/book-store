import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content">
        <h2 className="text-3xl text-black">Dashboard </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
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
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
