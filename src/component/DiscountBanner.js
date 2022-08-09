import React from 'react';
import discountBanner from '../asset/Images/discountBanner.jpg'
const DiscountBanner = () => {
    return (
<<<<<<< HEAD
        <div className="hero py-[150px] bg-base-200" style={{
=======
        <div class="bg-base-200" style={{
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
            background: `url(${discountBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
<<<<<<< HEAD
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl uppercase font-bold mb-8"><span className='text-5xl'>50% </span> discount on any historical fiction books</h1>
                    <button className="btn btn-primary text-xl text-white uppercase">Buy Now</button>
=======
            <div className='bg-green-900/50 py-28'>
                <div class="text-center">
                    <div class="">
                        <h1 class="text-3xl uppercase font-bold mb-8 text-white"><span className='text-6xl'>50% </span> discount on any historical fiction books</h1>
                        <button class="btn btn-primary btn-xl border-0 rounded-sm px-7 hover:bg-green-800 text-white">Buy Now</button>
                    </div>
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
