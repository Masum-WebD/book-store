import React from 'react';
import { Link } from 'react-router-dom';
import discountBanner from '../asset/Images/discountBanner.png';

const DiscountBanner = () => {
    return (

        <section>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={discountBanner} class="lg:w-3/6 rounded-lg drop-shadow-xl" alt='' />
                    <div className='lg:w-3/6 text-left'>
                        <h1 class="text-5xl font-bold text-neutral capitalize lg:leading-[65px]">Get 20% Discount on any
                            fiction books</h1>
                        <Link to="/all-products" class="btn btn-primary capitalize text-white mt-10">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DiscountBanner;
