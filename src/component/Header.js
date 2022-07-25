import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/Images/logo.png";
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '5px solid #229955',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
};

const Header = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    handleClose();
    toast.success("Logout successful")
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
              <Link to=" ">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <Link class="btn btn-ghost normal-case p-0 text-xl" to="/">
          <img className="lg:w-48 w-36 text-white" src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white font-semibold">
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
            <Link to=" ">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end lg:mx-5 d-flex text-white  font-bold">
        <Link to="">
          <FontAwesomeIcon className="lg:mr-5 mr-2 h-6" icon={faCartShopping} />
        </Link>
        {
          user ?

            <div class="">
              <button onClick={handleOpen} class="btn text-white">Log Out <FiLogOut className="text-xl ml-2" /></button>
            </div>

            :

            <div class="">
              <Link to='/login' class="btn text-white">Log in <FiLogIn className="text-xl ml-2" /></Link>
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
          <h1 className="text-black text-2xl text-center font-semibold">Are sure for logout?</h1>
          <div className="mt-6 flex justify-evenly">
            <button onClick={logout} className="btn">Yes</button>
            <button onClick={handleClose} className="btn">Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
