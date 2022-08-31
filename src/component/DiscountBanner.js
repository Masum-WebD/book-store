import React from 'react';
import { Link } from 'react-router-dom';
import discountBanner from '../asset/Images/discountBanner.png';

const DiscountBanner = () => {
    return (

        <section className="">
            <div class="hero min-h-screen ">
                <div class=" lg:py-0 lg:flex justify-between items-center lg:flex-row-reverse">
                    <img src={discountBanner} class="lg:w-3/6 rounded-lg drop-shadow-xl" alt='' />
                    <div className='lg:w-3/6 p-3 lg:p-0 text-left'>
                        <h1 class="lg:text-4xl text-2xl font-bold text-neutral capitalize lg:leading-[65px]">Get 20% Discount on any
                            fiction books</h1>
                        <Link to="/all-products" class="btn btn-primary capitalize text-white rounded-[5px] mt-5">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DiscountBanner;
