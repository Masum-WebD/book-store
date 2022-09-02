import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

const OrderSingle = ({ book }) => {
  const { img, name, author, price, quantity } = book;
  return (
    <tr className="text-left">
        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-size-sm whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
          Order #50521
        </p>
      </td>
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
          John Wick
        </p>
      </td>
      <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-size-sm whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
          ${price}
        </p>
      </td>
      <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span class="leading-tight text-slate-400">
          1
        </span>
      </td>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a
          href="javascript:;"
          class="font-semibold leading-tight text-size-lg text-green-400"
        >
          Details
        </a>
      </td>
    </tr>
  );
};

export default OrderSingle;
