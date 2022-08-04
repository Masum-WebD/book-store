import React from "react";

const MyOrders = () => {
  return (
    <div className="grid lg:grid-cols-2 border-2 border-gray-400 rounded-md mx-10">
      <div className="my-5">
        <h2 className="text-2xl text-gray-700">My Orders</h2>
        <h3 className="text-xl text-gray-500">Your Total Order : 0</h3>
      </div>
      <div className="flex justify-center items-center gap-3 my-5 lg:my-0">
        <div>
          <h2 className="text-xl text-gray-500">Status : </h2>
        </div>
        <div>
          <select class="select select-accent text-gray-500 w-full max-w-xs">
            <option disabled selected>
              Select Any
            </option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>Returned</option>
          </select>
        </div>
        <div>
          <button class="btn btn-primary text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
