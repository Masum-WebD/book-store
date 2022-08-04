import React from 'react';
import discountBanner from '../asset/Images/discountBanner.jpg'
const DiscountBanner = () => {
    return (
        <div class="hero py-[150px] bg-base-200" style={{
            background: `url(${discountBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-3xl uppercase font-bold mb-8 text-white"><span className='text-6xl'>50% </span> discount on any historical fiction books</h1>
                    <button class="btn btn-primary btn-xl rounded-3xl text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
