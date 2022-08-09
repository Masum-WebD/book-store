import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../asset/Images/logo.png";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from 'react-icons/io';
import userProfile from '../asset/Icons/user.png';

const Header = () => {
  const [user] = useAuthState(auth);
  const items = useSelector((state) => state.cart)
  const handleOpen = () => {
    Swal.fire({
      title: 'Are you sure for logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#27AE61',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      allowEnterKey: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout Successful', ' ', 'success'
        )
        signOut(auth);
        localStorage.removeItem('accessToken')
      }
    })
  }


  return (
    <div className="navbar bg-primary fixed top-0 z-50">
      <div className="navbar-start lg:mx-5">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="text-black" to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/all-products">SHOP</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/features">FEATURES</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/contact">CONTACT US</NavLink>
            </li>
            <li>
              {
                user && <NavLink className="text-black" to="/dashboard">DASHBOARD</NavLink>
              }
            </li>
            {
              user ?

                <button onClick={handleOpen} class="btn btn-secondary text-white">Log Out <FiLogOut className="text-xl ml-2" /></button>

                :

                <Link to='/login' class="btn btn-secondary text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>

            }
          </ul>
        </div>
<<<<<<< HEAD
        <Link className="btn btn-ghost normal-case p-0 text-xl" to="/">
=======
        <NavLink class="btn btn-ghost normal-case p-0 text-xl" to="/">
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
          <img className="lg:w-48 w-36 text-white" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white font-semibold">
          <li className="hover:bg-secondary">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:bg-secondary">
            <NavLink to="/all-products">SHOP</NavLink>
          </li>
          <li className="hover:bg-secondary">
            <NavLink to=" ">FEATURES</NavLink>
          </li>
          <li className="hover:bg-secondary">
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li className="hover:bg-secondary">
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
<<<<<<< HEAD
      <div className="navbar-end lg:mx-5 d-flex text-white  font-bold">
        <Link to="">
          <FontAwesomeIcon className="lg:mr-5 mr-2 h-6" icon={faCartShopping} />
        </Link>
        {user ? (
          <div className="">
            <button onClick={handleOpen} className="btn text-white">
              Log Out <FiLogOut className="text-xl ml-2" />
            </button>
          </div>
        ) : (
          <div className="">
            <Link to="/login" className="btn btn-sm text-white">
              Log in <FiLogIn className="text-xl ml-2" />
            </Link>
          </div>
        )}
        {
          user ?

            <div className="">
              <button onClick={handleOpen} className="btn text-white">Log Out <FiLogOut className="text-xl ml-2" /></button>
=======
      <div class="navbar-end lg:mx-5 d-flex text-white  font-bold">
        <NavLink to="addToCart">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator mr-2 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span class="badge badge-sm indicator-item">{items.length}</span>
            </div>
          </label>
        </NavLink>


        {
          user ?

            <div class="dropdown dropdown-end ml-2 hidden lg:block">
              <label tabindex="0" class="btn btn-outline text-white hover:text-black m-1">
                <div className="flex items-center">
                  <div class="avatar">
                    <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL ? user.photoURL : userProfile} alt="" />
                    </div>
                  </div>
                  <p className="ml-2">{user.displayName}</p>
                  <IoIosArrowDown className="text-lg font-bold ml-2" />
                </div>
              </label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">DASHBOARD</Link>
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">My Orders</Link>
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">My Account</Link>
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">My Wishlist</Link>
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">My eBook Library</Link>
                <Link className="text-black hover:underline hover:underline-offset-2 my-2" to="/dashboard">My Ratings and Reviews</Link>
                <button onClick={handleOpen} class="btn btn-secondary text-white">Log Out<FiLogOut className="text-xl ml-2" /></button>
              </ul>
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
            </div>

            :

<<<<<<< HEAD
            <div className="">
              <Link to='/login' className="btn text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>
            </div>
        }
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-black text-2xl text-center font-semibold">
            Are sure for logout?
          </h1>
          <div className="mt-6 flex justify-evenly">
            <button onClick={logout} className="btn">
              Yes
            </button>
            <button onClick={handleClose} className="btn">
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
=======
            <div class="hidden ml-5 lg:block">
              <Link to='/login' class="btn btn-secondary text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>
            </div>
        }
      </div>
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
    </div>
  );
};

export default Header;
