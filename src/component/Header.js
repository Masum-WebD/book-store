import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
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
  width: 400,
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
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li className="">
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case p-0 text-xl" to="/">
          <img className="lg:w-48 w-36 text-white" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white font-semibold">
          <li className="hover:bg-secondary">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to=" ">CATEGORY</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to=" ">FEATURES</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="hover:bg-secondary">
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
        </ul>
      </div>
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
            </div>

            :

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
    </div>
  );
};

export default Header;
