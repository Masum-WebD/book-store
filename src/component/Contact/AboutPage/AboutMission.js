import React from 'react';
import mission from '../../../asset/Images/Business mission-pana-min.png'
const AboutMission = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={mission} class="rounded-lg lg:w-3/6" alt='' />
                <div>
                    <h1 className='text-[28px] text-neutral capitalize font-bold mt-2 mb-2 text-left leading-[42px]'>our mission</h1>
                    <p className='text-[16px] leading-[26px] text-neutral font-normal text-left mb-8'>Our mission is to provide quality but affordable books for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of books to satisfy our clients. Exceeding our customers' expectation in their book requirements.</p>
                    <div className='flex justify-between items-center '>
                        <div className='relative'>
                            <h4 className='text-[18px] text-[#FF745C] font-bold text-center '>94%</h4>
                            <p className='text-[16px] mt-4 leading-[26px] text-neutral font-semibold capitalize'>customer attention</p>
                        </div>
                        <div>
                            <h4 className='text-[18px] text-[#452473] text-center font-bold'>72k</h4>
                            <p className='text-[16px] mt-4 leading-[26px] text-neutral font-semibold capitalize'>Total visitors alltime</p>
                        </div>
                        <div>
                            <h4 className='text-[18px] text-[#FF745C] text-center font-bold'>10m</h4>
                            <p className='text-[12px] text-[#0B1B28] uppercase'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMission;