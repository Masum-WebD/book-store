import React from "react";
import "./Myorders.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyOrders = () => {
  return (
    <div className="">
      <h1>Therichpost.com</h1>

      <div class="container padding-bottom-3x mb-1">
        <div class="card mb-3">
          <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
            <span class="text-uppercase">Tracking Order No - </span>
            <span class="text-medium">001698653lp</span>
          </div>
          <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Shipped Via:</span> UPS Ground
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Status:</span> Checking Quality
            </div>
            <div class="w-100 text-center py-1 px-2">
              <span class="text-medium">Expected Date:</span> APR 27, 2021
            </div>
          </div>
          <div class="card-body">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-cart"></i>
                  </div>
                </div>
                <h4 class="step-title">Confirmed Order</h4>
              </div>
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-config"></i>
                  </div>
                </div>
                <h4 class="step-title">Processing Order</h4>
              </div>
              <div class="step completed">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-medal"></i>
                  </div>
                </div>
                <h4 class="step-title">Quality Check</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-car"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Dispatched</h4>
              </div>
              <div class="step">
                <div class="step-icon-wrap">
                  <div class="step-icon">
                    <i class="pe-7s-home"></i>
                  </div>
                </div>
                <h4 class="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
          <div class="custom-control custom-checkbox mr-3">
            <input
              class="custom-control-input"
              type="checkbox"
              id="notify_me"
              checked=""
            />
            <label class="custom-control-label" for="notify_me">
              Notify me when order is delivered
            </label>
          </div>
          <div class="text-left text-sm-right">
            <a class="btn btn-outline-primary btn-rounded btn-sm" href="#">
              View Order Details
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-10">
    //   <div className="grid lg:grid-cols-2 border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md">
    //     <div className="my-5">
    //       <h2 className="text-2xl font-bold text-gray-700">My Orders</h2>
    //       <h3 className="text-xl text-gray-500">Your Total Order : 2</h3>
    //     </div>
    //     <div className="flex justify-center items-center gap-3 my-5 lg:my-0">
    //       <div>
    //         <h2 className="text-xl text-gray-500">Status : </h2>
    //       </div>
    //       <div>
    //         <select class="select select-accent text-gray-500 w-full max-w-xs">
    //           <option disabled selected>
    //             Select Any
    //           </option>
    //           <option>Processing</option>
    //           <option>Shipped</option>
    //           <option>Completed</option>
    //           <option>Cancelled</option>
    //           <option>Returned</option>
    //         </select>
    //       </div>
    //       <div>
    //         <button class="btn btn-primary text-white">Submit</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div class="grid grid-cols-5 rounded-md min-h-screen">
    //       <div class="col-span-full">
    //         <div class="overflow-auto lg:overflow-visible ">
    //           <table class="table text-gray-400 border-separate space-y-6 ">
    //             <thead class="bg-gray-800 text-gray-500">
    //               <tr>
    //                 <th class="p-3">Name</th>
    //                 <th class="p-3 text-left">Category</th>
    //                 <th class="p-3 text-left">Quantity</th>
    //                 <th class="p-3 text-left">Price</th>
    //                 <th class="p-3 text-left">Status</th>
    //                 <th class="p-3 text-left">Details</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr class="bg-gray-800">
    //                 <td class="p-3">
    //                   <div class="flex items-center">
    //                     <img
    //                       className="rounded-md h-12 w-12 object-cover"
    //                       src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Harry_Potter_and_the_Deathly_Hallows_(Se-J.K_Rowling-699a7-122325.jpg"
    //                       alt="unsplash-image"
    //                     />
    //                     <div class="ml-3">
    //                       <div class="">
    //                         Harry Potter and the Deathly Hallows (Series-7)
    //                       </div>
    //                       <div class="text-gray-500">J.K. Rowling</div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td class="p-3">History</td>
    //                 <td class="p-3">2</td>
    //                 <td class="p-3 font-bold">$1258</td>
    //                 <td class="p-3">
    //                   <span class="bg-green-400 text-gray-50 rounded-md p-2">
    //                     Processing
    //                   </span>
    //                 </td>
    //                 <td class="p-3">
    //                   <span class="bg-green-400 text-gray-50 rounded-md p-2">
    //                     Details
    //                   </span>
    //                 </td>
    //               </tr>
    //               <tr class="bg-gray-800">
    //                 <td class="p-3">
    //                   <div class="flex align-items-center">
    //                     <img
    //                       className="rounded-md h-12 w-12 object-cover"
    //                       src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/rokimg20141031_90990.gif"
    //                       alt="unsplash image"
    //                     />
    //                     <div class="ml-3">
    //                       <div class="">For Whom The Bell Tolls</div>
    //                       <div class="text-gray-500">Ernest Hemingway</div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td class="p-3">Novel</td>
    //                 <td class="p-3">1</td>
    //                 <td class="p-3 font-bold">$715</td>
    //                 <td class="p-3">
    //                   <span class="bg-red-400 text-gray-50 rounded-md p-2">
    //                     Cancelled
    //                   </span>
    //                 </td>
    //                 <td class="p-3">
    //                   <span class="bg-red-400 text-gray-50 rounded-md p-2">
    //                     Details
    //                   </span>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MyOrders;
