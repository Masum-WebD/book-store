import React from "react";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="text-left my-10">
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
        <div class="p-6 pb-0 mb-0 bg-white rounded-t-2xl text-purple-500">
          <h6>Tips</h6>
        </div>
        <div class="flex-auto px-7 py-3">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div class="flex flex-col h-full">
                <p class="pt-2 mb-1 text-gray-700">More Sells?</p>
                <h5 class="font-bold text-purple-400">Add New Products!</h5>
                <p class="mb-12 text-gray-500">
                  Adding new products can make your site professional. Buy will increase. More products, more sells.
                </p>
                <Link
                  class="mb-0 font-semibold leading-normal text-size-sm group text-slate-600"
                  to="/dashboard/addProduct"
                >
                  <i class="fas fa-plus ease-bounce text-size-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                  Add Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
