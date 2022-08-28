import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import OrderPerformance from "./OrderPerformance";
import Stats from "./Stats";
import Tips from "./Tips";

const DashboardDetails = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="ml-6">
      <h1 className="text-left text-2xl text-gray-800">
        Welcome , <span className="text-purple-500">{user?.displayName}</span> !
      </h1>
      <div class="breadcrumbs text-gray-800 lg:text-lg lg:font-semibold">
        <ul>
          <li>Today's</li>
          <li>Stats</li>
        </ul>
      </div>
      <Stats />
      <OrderPerformance />
      <Tips />
    </div>
  );
};

export default DashboardDetails;
