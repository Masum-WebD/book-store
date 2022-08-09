import React from "react";
import "./Myorders.css";

const MyOrders = () => {
  return (
    <div className="mx-10">
      <div className="grid lg:grid-cols-2 border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md lg:mx-48">
        <div className="my-5">
          <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
          <h3 className="text-xl text-gray-500">Your Total Order : 2</h3>
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
      <div>
        <div class="grid grid-cols-5 lg:ml-52 rounded-md min-h-screen">
          <div class="col-span-full">
            <div class="overflow-auto lg:overflow-visible ">
              <table class="table text-gray-400 border-separate space-y-6 ">
                <thead class="bg-gray-800 text-gray-500">
                  <tr>
                    <th class="p-3">Name</th>
                    <th class="p-3 text-left">Category</th>
                    <th class="p-3 text-left">Quantity</th>
                    <th class="p-3 text-left">Price</th>
                    <th class="p-3 text-left">Status</th>
                    <th class="p-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-800">
                    <td class="p-3">
                      <div class="flex items-center">
                        <img
                          class="rounded-md h-12 w-12  object-cover"
                          src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Harry_Potter_and_the_Deathly_Hallows_(Se-J.K_Rowling-699a7-122325.jpg"
                          alt="unsplash image"
                        />
                        <div class="ml-3">
                          <div class="">
                            Harry Potter and the Deathly Hallows (Series-7)
                          </div>
                          <div class="text-gray-500">J.K. Rowling</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">History</td>
                    <td class="p-3">2</td>
                    <td class="p-3 font-bold">$1258</td>
                    <td class="p-3">
                      <span class="bg-green-400 text-gray-50 rounded-md p-2">
                        Processing
                      </span>
                    </td>
                    <td class="p-3">
                      <span class="bg-green-400 text-gray-50 rounded-md p-2">
                        Details
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-gray-800">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <img
                          class="rounded-md h-12 w-12   object-cover"
                          src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/rokimg20141031_90990.gif"
                          alt="unsplash image"
                        />
                        <div class="ml-3">
                          <div class="">For Whom The Bell Tolls</div>
                          <div class="text-gray-500">Ernest Hemingway</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">Novel</td>
                    <td class="p-3">1</td>
                    <td class="p-3 font-bold">$715</td>
                    <td class="p-3">
                      <span class="bg-red-400 text-gray-50 rounded-md p-2">
                        Cancelled
                      </span>
                    </td>
                    <td class="p-3">
                      <span class="bg-red-400 text-gray-50 rounded-md p-2">
                        Details
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
