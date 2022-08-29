import React from "react";

const MyReview = () => {
  return (
    <div className="my-5 text-left border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md mx-10 p-5">
      <h2 className="text-2xl font-bold text-gray-700">
        My Ratings and Reviews
      </h2>

      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation">
            <button
              class="inline-block p-4 rounded-t-lg border-b-2 text-green-600 hover:text-green-600 dark:text-green-500 dark:hover:text-green-500 border-green-600 dark:border-green-500"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Not Reviewed
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Reviewed
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            There are no product {" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              to be Reviewed.
            </strong>
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            There are no product {" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              to be Reviewed.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
