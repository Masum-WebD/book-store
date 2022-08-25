import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
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
        </div>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side drawer-mobile">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-green-600 text-white">
          <h2 className="text-3xl flex justify-center items-center gap-2 my-5">
            Dashboard<MdSpaceDashboard></MdSpaceDashboard>
          </h2>
          <li>
            <Link to="/dashboard">My Account</Link>
          </li>
          <>
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard/order">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/myReview">My Ratings and Review</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">My Wishlist</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">Manage All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageOrders">Manage All Order</Link>
                </li>
              </>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
