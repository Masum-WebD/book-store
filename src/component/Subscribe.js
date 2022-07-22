import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-secondary h-[200px]">
          <div className='flex justify-center  input-group  '>
          <input type="text" className='w-[500px] h-[60px] mt-[75px] outline-none shadow-xl text-black p-2 ' placeholder='SUBSCRIBE TO OUR NEWSLETTER' />
          <button className=' mt-[75px] w-[200px] h-[60px] shadow-xl  btn bg-primary hover:bg-secondary hover:outline-none text-white'>SUBSCRIBE</button>
          </div>
    </div>
  );
};
export default Subscribe;
