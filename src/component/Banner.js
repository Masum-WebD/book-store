import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="">
      <div class="banner">
        <div className="bg-green-900/70 py-40">
          <div class="text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 text-5xl font-bold leading-[60px] text-white">
                THE EASIEST WAY TO<br/> BUY ANY BOOK
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 w-4/5 lg:p-3 p-2 mx-auto lg:-mt-9 -mt-9 relative bg-white rounded-lg shadow-lg">
        <div class="relative">
          <input type="text" placeholder="Search your book" class="input input-bordered rounded-md input-primary text-black w-full " />
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Search <FaSearch className="ml-2" /></button>
        </div>
      </div>
    </section >
  );
};

export default Banner;
