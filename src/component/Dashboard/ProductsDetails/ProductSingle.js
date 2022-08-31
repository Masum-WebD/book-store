import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

const ProductSingle = ({ book }) => {
  const { img, name, author, price, stock, category } = book;
  return (
    <tr className="text-left">
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div class="flex px-2 py-1">
          <div>
            <img
              src={img}
              class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-size-sm h-9 w-9 rounded-xl"
              alt="user1"
            />
          </div>
          <div class="flex flex-col justify-center">
            <h6 class="mb-0 leading-normal text-size-sm">
              {name.slice(0, 25)}
            </h6>
            <p class="mb-0 leading-tight text-size-xs text-slate-400">
              {author.slice(0, 25)}
            </p>
          </div>
        </div>
      </td>
      <td class="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
          {stock}
        </p>
      </td>
      <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-size-sm whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
          ${price}
        </p>
      </td>
      <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span class="leading-tight text-slate-400">
          {category.slice(0, 15)}
        </span>
      </td>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a
          href="javascript:;"
          class="font-semibold leading-tight text-size-lg text-red-400"
        >
          {" "}
          <RiDeleteBinFill/>{" "}
        </a>
      </td>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a
          href="javascript:;"
          class="font-semibold leading-tight text-size-lg text-gray-700"
        >
          {" "}
          <AiFillEdit/>{" "}
        </a>
      </td>
    </tr>
  );
};

export default ProductSingle;
