import React from 'react';

const AboutStory = () => {
    return (
        <div className='container text-left sm:block lg:flex justify-around items-center mt-[100px] w-10/12 mx-auto '>
            <div className='sm: w-full lg:w-[40%] relative'>
                <div className='mb-12'>
                    <h4 className='text-secondary text-[20px] font-bold mb-4'>Our story</h4>
                    <p className='text-[#0B1B28] text-[14px] font-normal'>We are building the economic infrastructure for the internet. Businneses of every size.</p>
                </div>
                <div className='flex justify-center items-center '>
                    <div className='mt-4'>

                        <div className='relative h-[70px] w-[70px] bg-[#16162E] rounded-full'>
                            <div className='absolute h-[70px] w-[70px] top-[-55%] bg-white '></div>
                            <div className='absolute top-[0%] left-[0%] h-[30px]  overflow-hidden w-[30px] bg-[#452473] rounded-full'></div>
                            <div className='absolute top-[0%] left-[50%] h-[30px] overflow-hidden w-[30px] bg-[#FF745C] rounded-full'></div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[#0B1B28] text-[14px] font-normal ml-6'>A living place for curiosity and collaboration meeting and meaning. <br />The heart of a creative community.</p>
                    </div>

                </div>
                <div className='absolute top-[50%] left-[40%] h-[10px] w-[10px] rounded-full bg-[#452473]'></div>
                <div className='absolute top-[50%] right-[0%] h-[15px] w-[15px] rounded-full bg-[#FF745C]'></div>
            </div>

            <div className='sm:w-full lg:w-[50%] lg:ml-6 pt-4'>
                <div>
                    <h4 className='text-secondary text-[20px] font-bold mb-4'>01. 6 years of intence research </h4>
                    <p className='text-[#0B1B28] text-[14px] font-normal mb-6'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                    <h4 className='text-secondary text-[20px] font-bold mb-4'>02. Audience segmentation</h4>
                    <p className='text-[#0B1B28] text-[14px] font-normal mb-6'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                    <h4 className='text-secondary text-[20px] font-bold mb-4 '>03. Contact monitoring</h4>
                    <p className='text-[#0B1B28] text-[14px] font-normal mb-6'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutStory;