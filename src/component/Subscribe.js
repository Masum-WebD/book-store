import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-secondary h-[200px]">
      <div className='flex justify-center mx-auto input-group lg:w-2/5 w-4/5'>
        <input type="text" className='lg:w-full mt-[75px] outline-none shadow-xl text-black p-2 ' placeholder='SUBSCRIBE TO OUR NEWSLETTER' />
        <button className='mt-[75px] shadow-xl btn bg-primary hover:bg-secondary hover:outline-none text-white'>SUBSCRIBE</button>
      </div>
    </div>
  );
};
export default Subscribe;
