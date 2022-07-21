import React from "react";
import { BsSearch } from "react-icons/bs";
import image1 from "../../src/asset/Images/shiromani-kant-mo3FOTG62ao-unsplash.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero ">
      <img className="banner" alt='' />
      <div></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-3xl font-bold text-white">
            THE EASIEST WAY TO BUY ANY BOOK
          </h1>

          <div className="background flex justify-center">
            <div>
              <input
                type="text"
                placeholder="Search books"
                class="input mt-3   w-full max-w-xs"
              />
            </div>
            <div className="mt-3">
              <button class="btn btn-color mx-4">
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
