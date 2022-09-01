import React from 'react';
const AboutBannerSolid = () => {
    return (
        <div>
            <div class="hero lg:mt-0 py-24  bg-[#F8F3FF] shadow relative">
                <div class="hero-content text-center ">
                    <div class="max-w-md">
                        <h1 class="text-5xl text-[#0B1B28] font-bold  leading-normal capitalize">We are changing the game</h1>
                        <p class="text-[#0B1B28] text-base leading-[28px] py-6">Nowadays, the network plays an import role in people’s life. In the process of the improvement of the people’s living standard.</p>
                        <button class="btn bg-[#FF745C] text-[white] capitalize mt-5 Lg:mr-5 border-none rounded-sm hover:bg-[#e3614a]">Get Started</button>
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