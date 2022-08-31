import React from "react";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import "./OrderHistory.css";
import {
  FaBug,
  FaPeopleCarry,
  FaTaxi,
  FaBabyCarriage,
  FaAtom,
  FaRegCalendarCheck,
} from "react-icons/fa";
import img22 from "../../asset/Images/Harry_Potter_and_the_Deathly_Hallows_(Se-J.K_Rowling-699a7-122325.jpg";

const OrderHistory = () => {
  return (
    <div className="px-10">
      <div className="w-full ">
        <h1 className="text-2xl text-left py-3">Order Id: Order #50523</h1>
        <Timeline minEvents={5} placeholder>
          <TimelineEvent
            color="#22c55e"
            icon={FaBabyCarriage}
            title="Confirm Order"
            subtitle="26/03/2019 09:51"
          />
          <TimelineEvent
            color="#eab308"
            icon={FaAtom}
            title="Processing Order"
            subtitle="26/03/2019 09:51"
          />
          <TimelineEvent
            color="#9a3412"
            icon={FaRegCalendarCheck}
            title="Quantity Check"
            subtitle="26/03/2019 09:51"
          />
          <TimelineEvent
            color="#15803d"
            icon={FaTaxi}
            title="Product Dispatched"
            subtitle="26/03/2019 09:51"
          />
          <TimelineEvent
            color="#84cc16"
            icon={FaPeopleCarry}
            title="Home Delivered"
            subtitle="26/03/2019 09:51"
          />
        </Timeline>
      </div>
      <div className=" flex grid-cols-lg-2 gap-3 ">
        <div className="w-80 h-30 border bg-white">
          <h1 className="text-2xl mx-0">Delivery Address</h1>
          <h1 className="text-3xl">Home:</h1>
          <p>Rangpur,Dinajpur</p>
          <p>Dinajpur sadar, bangladesh</p>
          <p>Phone Number: +8801742*****3</p>
        </div>
        <div className="bg-white w-full">
          <h1 className="text-2xl">Product Summary</h1>
          <div className="border flex gap-5 w-full ">
            <div>
              <img src={img22} className="img22" alt="" />
            </div>
            <div className="mt-5 mx-1">
              <h1 className="text-xl">Product Name: Harry potter</h1>
            </div>
            <div className="border">
             <p>Price: 140</p>
             <p>Qnt:1</p>
             <p>TK:140</p>
            </div>
            <div className="">
              <p>Total item: 1 Products</p>
              <p>Sub Total: 143 Tk</p>
              <p>Shipping Fe:50 tk</p>
              <p className="mt-5 mx-auto border">Payable Amount: 200 Tk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
