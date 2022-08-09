import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero mt-16">
      <img className="banner" alt="" />
      <div></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-white">
            THE EASIEST WAY TO BUY ANY BOOK
          </h1>

          <div className="background flex ">
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input mt-3 text-black   w-full max-w-xs"
              />
            </div>
            <div className="mt-3">
              <button className="btn btn-color mx-4">
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
