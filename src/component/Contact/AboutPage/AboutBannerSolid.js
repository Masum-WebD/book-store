import React from 'react';
import { Link } from "react-router-dom";
const AboutBannerSolid = () => {
    return (
        <div>
            <div class="hero lg:mt-0 py-24  bg-[#F8F3FF] drop-shadow-lg relative">
                <div class="hero-content text-center ">
                    <div class="max-w-md">
                        <h1 class="text-5xl text-[#0B1B28] font-bold  leading-normal capitalize">We are changing the game</h1>
                        <p class="text-[#0B1B28] py-6">Nowadays, the network plays an import role in people’s life. In the process of the improvement of the people’s living standard.</p>
                        <button class="btn bg-[#FF745C] text-[white] border-none rounded-sm hover:bg-[#e3614a]">Get Started</button>
                        <Link to='/all-products'><button class="btn bg-[#FF745C] rounded-sm text-[white] border-none hover:bg-[#FF745C] ml-4">View Pricing</button></Link>
                    </div>

                </div>
                <div className='absolute top-[30%] left-[80%] h-[15px] w-[15px] rounded-full bg-[#452473]'></div>
                <div className='absolute top-[40%] left-[20%]  h-[20px] w-[20px] rounded-full bg-[#e3614a]'></div>
                <div className='absolute top-[60%] left-[70%]  h-[20px] w-[20px] rounded-full bg-[#16162E]'></div>
                <div className='absolute top-[70%] right-[20%]  h-[10px] w-[10px] rounded-full bg-[#46c08f]'></div>
            </div>
        </div>
    );
};

export default AboutBannerSolid;