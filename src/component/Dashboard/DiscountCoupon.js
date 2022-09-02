import React from "react";
import { AiFillEdit, AiFillPrinter, AiOutlineDownload } from "react-icons/ai";

const DiscountCoupon = () => {
  return (
    <div className="container mx-auto rounded-md shadow-lg">
      <div className="flex justify-between items-center px-10">
        <div className="">
          <h2 className="uppercase text-gray-700  text-2xl font-bold">
            Discount Coupon
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
                    Code
                  </th>
                  <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Date
                  </th>
                  <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Usage
                  </th>
                  <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                    Status
                  </th>
                  <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-600 opacity-70"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-left">
                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      EID23
                    </p>
                  </td>
                  <td class="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      01.06.2023 - 01.07.2023
                    </p>
                  </td>
                  <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-size-sm whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      532/1000
                    </p>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <span class="badge badge-primary text-white leading-tight">
                      active
                    </span>
                  </td>

                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <a
                      href="javascript:;"
                      class="font-semibold leading-tight text-size-lg text-gray-700"
                    >
                      {" "}
                      <AiFillEdit />{" "}
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-left">
                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      WINTER2023
                    </p>
                  </td>
                  <td class="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      07.10.2023 - 07.11.2023
                    </p>
                  </td>
                  <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-size-sm whitespace-nowrap shadow-transparent">
                    <p class="mb-0 font-semibold leading-tight text-size-xs text-left">
                      1000
                    </p>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <span class="badge text-white leading-tight">
                      inactive
                    </span>
                  </td>

                  <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <a
                      href="javascript:;"
                      class="font-semibold leading-tight text-size-lg text-gray-700"
                    >
                      {" "}
                      <AiFillEdit />{" "}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-4 md:container mx-auto mt-16 lg:mb-0 mb-16"></div>
    </div>
  );
};

export default DiscountCoupon;
