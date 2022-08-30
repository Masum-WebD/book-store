import React from 'react';
import { Link } from 'react-router-dom';
import delivery from '../asset/Images/delivery.png';

const Delivery = () => {
    return (
        <div class="hero min-h-screen my-16 lg:mb-28">
            <div class="hero-content flex-col lg:flex-row">
                <img src={delivery} class="lg:max-w-xl  drop-shadow-xl" alt='' />
                <div className='lg:w-3/6 lg:text-left'>
                    <h1 class="lg:text-4xl text-2xl text-left font-semibold lg:font-bold  text-neutral" style={{ lineHeight: '40px' }}>Experience our quickest worldwide delivery</h1>
                    <p class="py-6 text-neutral text-left my-4">From keeping your costs low to anticipating potential roadblocks, we help your parcel ship smarter.Our local experts identify the most efficient logistics solutions for your needs and then put these answers into motion using the power of our international carrier networks and resources. Therefore, place your purchase as soon as possible. You are our top priority.</p>
                    <Link to="/all-products" className='btn btn-primary capitalize rounded-sm text-white'>Order now</Link>
                </div>
            </div>
        </div>
    );
};

export default Delivery;