import React from 'react';
import delivery from '../asset/Images/delivery.png';

const Delivery = () => {
    return (
        <div class="hero min-h-screen my-16 lg:my-0">
            <div class="hero-content flex-col lg:flex-row">
                <img src={delivery} class="lg:max-w-xl drop-shadow-xl" alt='' />
                <div className='lg:w-3/6 lg:text-left'>
                    <h1 class="text-5xl font-bold  text-black" style={{ lineHeight: '60px' }}>Experience our quickest worldwide delivery</h1>
                    <p class="py-6 text-black my-4">From keeping your costs low to anticipating potential roadblocks, we help your parcel ship smarter.Our local experts identify the most efficient logistics solutions for your needs and then put these answers into motion using the power of our international carrier networks and resources. Therefore, place your purchase as soon as possible. You are our top priority.</p>
                    <button className='btn text-white'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Delivery;