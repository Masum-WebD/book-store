import React from "react";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import "./OrderHistory.css";
import {
  FaPeopleCarry,
  FaBabyCarriage,
  FaAtom,
  FaRegCalendarCheck,
} from "react-icons/fa";
import img22 from "../../asset/Images/Harry_Potter_and_the_Deathly_Hallows_(Se-J.K_Rowling-699a7-122325.jpg";

const OrderHistory = () => {
  return (
    <div className="px-10 overflow-auto">
      <h1 className="text-2xl text-left mb-10">
        <span className="font-bold">Order Id:</span> Order #50523
      </h1>
      <div className="lg:w-full">
        <Timeline minEvents={5}>
          <div className="flex justify-between w-72 lg:w-full overflow-auto">
            <div className="w-36">
              <TimelineEvent
                color="#22c55e"
                icon={FaBabyCarriage}
                title="Payment Done"
                subtitle="26/03/2022 09:51"
              />
            </div>
            <div className="w-36">
              <TimelineEvent
                color="#eab308"
                icon={FaAtom}
                title="Processing"
                subtitle="26/03/2022 10:30"
              />
            </div>
            <div className="w-36">
              <TimelineEvent
                color="#9a3412"
                icon={FaRegCalendarCheck}
                title="Shipped"
                subtitle="29/03/2022 09:02"
              />
            </div>
            <div className="">
              <TimelineEvent
                color="#84cc16"
                icon={FaPeopleCarry}
                title="Delivered"
                subtitle="30/03/2022 12:22"
              />
            </div>
          </div>
        </Timeline>
      </div>
      <div className="grid gap-3">
        <div className="bg-white w-full">
          <h1 className="text-2xl font-bold my-2">Product Summary</h1>
          <div className="border grid grid-cols-3 items-center overflow-x-auto p-5">
            <div className="lg:flex justify-between border-r-2">
              <img src={img22} className="img22" alt="" />
              <div className="items-center">
                <h1 className="text-xl">Harry potter - Deathly Hallows</h1>
                <p className="">By JK. Rowling</p>
              </div>
            </div>
            <div className="border-r-2">
              <p className="border-b-2 p-4">Price: $140</p>
              <p className="border-b-2 p-4">Qantity: 1</p>
              <p className="p-4">Total Price: $140</p>
            </div>
            <div className="">
              <p className="border-b-2 p-2">Total item: 1 Products</p>
              <p className="border-b-2 p-2">Sub Total: $140</p>
              <p className="border-b-2 p-2">Shipping Fee:$50</p>
              <p className="p-2">Payable Amount: $200</p>
            </div>
          </div>
        </div>
        <div className="border bg-white p-5">
          <h1 className="text-2xl mx-0 font-bold">Delivery Address:</h1>
          <p>New York</p>
          <p>House no 24, Green Valley</p>
          <p>Phone Number: +2460699</p>
          <p>Email Id: Frankleen@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
