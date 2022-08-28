import React from "react";

const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 text-left text-gray-700">
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
              <div>
                <p class="mb-0 font-sans font-semibold leading-normal uppercase text-size-sm">
                  Earnings
                </p>
                <h5 class="mb-2 font-bold dark:text-white">$315.30</h5>
                <p class="mb-0 dark:text-white dark:opacity-60">
                  <span class="font-bold leading-normal text-size-sm text-emerald-500">
                    +55%
                  </span>
                  since yesterday
                </p>
              </div>
            </div>
            <div class="px-3 text-right basis-1/3">
              <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                <i class="fa fa-coins text-size-lg relative top-3.5 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
              <div>
                <p class="mb-0 font-sans font-semibold leading-normal uppercase text-size-sm">
                  New Orders
                </p>
                <h5 class="mb-2 font-bold dark:text-white">16</h5>
                <p class="mb-0 dark:text-white dark:opacity-60">
                  <span class="font-bold leading-normal text-size-sm text-emerald-500">
                    +25%
                  </span>
                  since yesterday
                </p>
              </div>
            </div>
            <div class="px-3 text-right basis-1/3">
              <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                <i class="fa fa-coins text-size-lg relative top-3.5 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
              <div>
                <p class="mb-0 font-sans font-semibold leading-normal uppercase text-size-sm">
                  New Users
                </p>
                <h5 class="mb-2 font-bold dark:text-white">13</h5>
                <p class="mb-0 dark:text-white dark:opacity-60">
                  <span class="font-bold leading-normal text-size-sm text-emerald-500">
                    +40%
                  </span>
                  since yesterday
                </p>
              </div>
            </div>
            <div class="px-3 text-right basis-1/3">
              <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                <i class="fa fa-coins text-size-lg relative top-3.5 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
              <div>
                <p class="mb-0 font-sans font-semibold leading-normal uppercase text-size-sm">
                  Recent Comments
                </p>
                <h5 class="mb-2 font-bold dark:text-white">15</h5>
                <p class="mb-0 dark:text-white dark:opacity-60">
                  <span class="font-bold leading-normal text-size-sm text-emerald-500 mr-2">
                    +55%
                  </span>
                  Positive
                </p>
              </div>
            </div>
            <div class="px-3 text-right basis-1/3">
              <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                <i class="fa fa-coins text-size-lg relative top-3.5 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
