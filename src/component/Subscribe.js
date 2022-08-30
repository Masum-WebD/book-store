import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-secondary lg:h-[321px] h-80 bg-cover bg-no-repeat" >
      <div className='flex lg:flex-row flex-col mx-auto max-w-[1196px] justify-center items-center h-full lg:px-0 px-3'>

        <div className="mb-3 lg:mb-0">
          <h1 className="lg:text-4xl text-2xl text-center text-white font-bold capitalize lg:leading-[65px]">Subscribe our newsletter<br /> for newest books update</h1>
        </div>
        <div class="relative mt-3 lg:mt-0 lg:w-2/5 w-11/12 mx-auto">
          <input type="email" placeholder="Your email" class="input input-bordered rounded-[30px] p-7 w-full text-black" />
          <button class="btn btn-primary absolute top-[4.5px] right-1 rounded-3xl text-white">Subscribe</button>
        </div>

      </div>
    </div>
  );
};
export default Subscribe;
