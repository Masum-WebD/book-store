import React from "react";
import './Myorders.css'
import image from '../../../src/asset/Images/Harry_Potter_and_the_Deathly_Hallows_(Se-J.K_Rowling-699a7-122325.jpg'

const MyOrders = () => {
  return (
    <div className="mx-10">
      <div className="grid lg:grid-cols-2 border-2  border-gray-400 rounded-md mx-10">
        <div className="my-5">
          <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
          <h3 className="text-xl text-gray-500">Your Total Order : 1</h3>
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
       <div className="order-details mt-5 grid grid-cols-4 border-2 border-gray-400 rounded-md">
      <div className="flex align-center">
        <div>
          <img className="image1" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-black">Name:</h1>
          <h1 className="text-black">Science fiction</h1>
        </div>
      </div>
      <div>
        <h1 className="text-black">Quantity:</h1>
        <h1 className="text-black">1</h1>
      </div>
      <div>
        <h1 className="text-black">Status</h1>
        <h1 className="text-black">Processing</h1>
      </div>
      <div>
        <h1 className="text-black">Delivery time:</h1>
        <h1 className="text-black">12/12/2050</h1>
      </div>
    </div>
    </div>
  
  );
};

export default MyOrders;
