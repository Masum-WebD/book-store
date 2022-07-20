import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import React from 'react';
import logo from '../asset/Images/logo.png'

const Header = () => {
   
    return (
        <div class="navbar bg-primary ">
  <div class="navbar-start mx-5">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link  to='/'>HOME</Link></li>
      <li><Link to=''>SHOPE</Link></li>
      <li><Link to=' '>CATEGORY</Link></li>
      <li><Link to=' '>FEATURES</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl " href=' '>
        <img className='w-[182px] h-[36px] text-white' src={logo} alt="" />
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-white font-bold">
      <li><Link  to='/'>HOME</Link></li>
      <li><Link to=''>SHOPE</Link></li>
      <li><Link to=' '>CATEGORY</Link></li>
      <li><Link to=' '>FEATURES</Link></li>
    </ul>
  </div>
  <div class="navbar-end mx-5 d-flex text-white  font-bold">
        
       <Link to=''> <FontAwesomeIcon className='mr-5 h-6' icon={faCartShopping} /></Link>
        <ul>
            <Link to=''>LOGIN</Link>
        </ul>
      
       
  </div>
</div>
    );
};

export default Header;