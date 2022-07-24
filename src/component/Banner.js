import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero ">
      <img className="banner" alt="" />
      <div></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-3xl font-bold text-white">
            THE EASIEST WAY TO BUY ANY BOOK
          </h1>

          <div className="background flex shadow-2xl">
            <div>
              <input
                type="text"
                placeholder="Search your book"
                class="input mt-3 ml-2 w-full max-w-xs"
              />
            </div>
            <div className="mt-3">
              <button class="btn btn-primary text-white mx-4">
                SEARCH
                <span className="mx-2">
                  <BsSearch />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
