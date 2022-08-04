import React, { useEffect, useState } from "react";

const ShopUserInfo = () => {
  const [countryName, setcountryName] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountryName(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-medium">Customer Information</h2>
      <form className="lg:mt-12 mt-5">
        <div className="lg:flex gap-3">
          <div class="form-control w-full ">
            <label class="">
              <span class="text-accent">First Name</span>
            </label>
            <input type="text" class="bg-white focus:outline-red-100 border border-red-100 p-1 rounded" />
          </div>
          <div class="form-control mt-5 lg:mt-0 w-full">
            <label class="">
              <span class="text-accent ">Last Name</span>
            </label>
            <input type="text" class="focus:outline-red-100 bg-white border border-red-100 p-1 rounded" />
          </div>
        </div>
        <div class="form-control mt-5 w-full">
          <label class="">
            <span class="text-accent">Email Address</span>
          </label>
          <input type="email" class="bg-white border focus:outline-red-100 border-red-100 p-1 rounded" />
        </div>
        <div class="form-control mt-5 w-full">
          <label class="">
            <span class="text-accent">Phone Number</span>
          </label>
          <input type="email" class="bg-white border focus:outline-red-100 border-red-100 p-1 rounded" />
        </div>
        <div class="form-control mt-5 w-full">
          <label class="">
            <span class="text-accent">Address</span>
          </label>
          <input type="email" class="bg-white border focus:outline-red-100 border-red-100 p-1 rounded" />
        </div>
      </form>
    </div>
  );
};

export default ShopUserInfo;
