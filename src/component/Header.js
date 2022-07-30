import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../asset/Images/logo.png";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "5px solid #229955",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    handleClose();
    toast.success("Logout successful");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <NavLink className="text-black" to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/all-products">SHOP</NavLink>
            </li>
            <li>
              <NavLink className="text-black" to="/category">CATEGORY</NavLink>
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

                <button onClick={handleOpen} class="btn text-white">Log Out <FiLogOut className="text-xl ml-2" /></button>

                :

                <Link to='/login' class="btn text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>

            }
          </ul>
        </div>
        <NavLink class="btn btn-ghost normal-case p-0 text-xl" to="/">
          <img className="lg:w-48 w-36 text-white" src={logo} alt="" />
        </NavLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white font-semibold">
          <li className="hover:bg-secondary">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:bg-secondary">
            <NavLink to="/all-products">SHOP</NavLink>
          </li>
          <li tabindex="0">
            <Link to="">
              CATEGORY
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul class="p-2 bg-white">
              <li className="text-black"><Link to="">Submenu 1</Link></li>
              <li className="text-black"><Link to="">Submenu 2</Link></li>
            </ul>
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
          {
            user &&

            <li className="hover:bg-secondary">
              <NavLink to="/dashboard">DASHBOARD</NavLink>
            </li>
          }
        </ul>
      </div>
      <div class="navbar-end lg:mx-5 d-flex text-white  font-bold">
        <NavLink to="addToCart">
          <FontAwesomeIcon className="lg:mr-5 mr-2 h-6" icon={faCartShopping} />
        </NavLink>


        {
          user ?

            <div class="hidden lg:block">
              <button onClick={handleOpen} class="btn text-white">Log Out <FiLogOut className="text-xl ml-2" /></button>
            </div>

            :

            <div class="hidden lg:block">
              <Link to='/login' class="btn text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>
            </div>
        }
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
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
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
