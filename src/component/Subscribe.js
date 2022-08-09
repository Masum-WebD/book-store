import React from "react";
import sub from '../asset/Images/sub.png';
import mail from '../asset/Icons/mail.png';

const Subscribe = () => {
  return (
    <div className="bg-secondary lg:h-[460px] h-80 bg-cover bg-no-repeat" style={{
      background: `url(${sub})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className='flex justify-center items-center h-full'>
        <div >
          <div>
            <h1 className="lg:text-5xl text-2xl text-center text-white font-bold">Get notified when we are launching. <img className="lg:w-14 w-10 relative bottom-2 inline-block" src={mail} alt="" /></h1>
            <p className="lg:w-3/6 w-4/5 mx-auto lg:my-8 my-4 lg:text-lg text-white text-center">Subscribe for our weekly newsletter to get to know about exciting offers, our latest products, the latest industry updates, and amazing offers delivered directly in your inbox.</p>
          </div>
          <div class="relative lg:w-3/6 w-4/5 mx-auto">
            <input type="email" placeholder="Your email" class="input input-bordered w-full pr-16 text-black" />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
