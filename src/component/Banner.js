import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div class="hero mt-16">
        <img className="banner" alt="" />
        <div></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold text-white">
              THE EASIEST WAY TO BUY ANY BOOK
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 w-4/5 lg:p-6 p-3 mx-auto lg:-mt-12 -mt-9 relative bg-white rounded-lg shadow-2xl">
        <div class="relative">
          <input type="text" placeholder="Search your book" class="input input-bordered input-primary text-black w-full pr-16" />
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Search <FaSearch className="ml-2" /></button>
        </div>
      </div>
    </section >
  );
};

export default Banner;
