import React from 'react';
import discountBanner from '../asset/Images/discountBanner.jpg'
const DiscountBanner = () => {
    return (

        <div class="bg-base-200 my-28" style={{
            background: `url(${discountBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>

            <div className='bg-green-900/50 py-28'>
                <div class="text-center">
                    <div class="">
                        <h1 class="text-3xl uppercase font-bold mb-8 text-white"><span className='text-6xl'>50% </span> discount on any historical fiction books</h1>
                        <button class="btn btn-primary btn-xl border-0 rounded-sm px-7 hover:bg-green-800 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
