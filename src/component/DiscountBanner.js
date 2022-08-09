import React from 'react';
import discountBanner from '../asset/Images/discountBanner.jpg'
const DiscountBanner = () => {
    return (
        <div className="hero py-[150px] bg-base-200" style={{
            background: `url(${discountBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl uppercase font-bold mb-8"><span className='text-5xl'>50% </span> discount on any historical fiction books</h1>
                    <button className="btn btn-primary text-xl text-white uppercase">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
