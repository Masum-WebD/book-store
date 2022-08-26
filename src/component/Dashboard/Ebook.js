import React from "react";
import "./Ebook.css";

const Ebook = () => {
  return (
    <div>
      <div className="my-5 text-left border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md mx-10 p-5">
      <h2 className="text-2xl font-bold text-gray-700">My EBook Library</h2>
      <h3 className="text-xl text-gray-500">Your Ebook : 2</h3>
    </div>
      <div>
        <div class="grid grid-cols-5 mx-10 min-h-screen">
          <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible ">
              <table class="table text-gray-400 border-separate space-y-6 ">
                <thead class="bg-gray-800 text-gray-500">
                  <tr>
                    <th class="p-3">Name</th>
                    <th class="p-3 text-left">Category</th>
                    <th class="p-3 text-left">Price</th>
                    <th class="p-3 text-left">Status</th>
                    <th class="p-3 text-left">Action</th>
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
                          <div class="">Harry Potter and the Deathly Hallows (Series-7)</div>
                          <div class="text-gray-500">J.K. Rowling</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">History</td>
                    <td class="p-3 font-bold">$1258</td>
                    <td class="p-3">
                      <span class="bg-green-400 text-gray-50 rounded-md px-2">
                        Purchased
                      </span>
                    </td>
                    <td class="p-3">
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 mr-2"
                      >
                        <i class="bg-green-400 text-gray-50 rounded-md px-2">
                          Read The Book
                        </i>
                      </a>
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
                    <td class="p-3 font-bold">$715</td>
                    <td class="p-3">
                      <span class="bg-red-400 text-gray-50 rounded-md px-2">
                        Not Purchased
                      </span>
                    </td>
                    <td class="p-3">
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100  mr-2"
                      >
                        <i class="bg-yellow-400 text-gray-50 rounded-md px-2">
                          Make Payment
                        </i>
                      </a>
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

export default Ebook;
