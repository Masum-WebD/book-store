import React, { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import ProductSingle from "./ProductSingle";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://book-store-46yi.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto rounded-md shadow-lg">
      <div className="flex justify-between items-center px-10">
        <div className="">
          <h2 className="uppercase text-gray-700  text-2xl font-bold">
            Products List
          </h2>
        </div>
        <div className="text-gray-700 flex gap-3 cursor-pointer font-bold">
          <a className="text-2xl hover:text-purple-400">
            <AiFillPrinter />
          </a>
          <a className="text-2xl hover:text-purple-400">
            <AiOutlineDownload />
          </a>
        </div>
      </div>
      <div class="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
        <div class="flex-auto px-0 pt-0 pb-2">
          <div class="p-10 overflow-x-auto">
            <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead class="align-bottom">
                <tr>
                  <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Book Information
                  </th>
                  <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Stock
                  </th>
                  <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Price
                  </th>
                  <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Category
                  </th>

                  <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-600 opacity-70"></th>
                  <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-600 opacity-70"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((book) => (
                  <ProductSingle book={book}></ProductSingle>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-4 md:container mx-auto mt-16 lg:mb-0 mb-16"></div>
    </div>
  );
};

export default ProductList;
