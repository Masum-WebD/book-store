import React from 'react';
import man from '../../../asset/Images/man1-removebg-preview.png'
const AboutMission = () => {
    return (
        <div className='conatiner text-left flex justify-around items-center h-[300px] mb-[100px]'>
            <div className='w-[50%] relative'>
                <h2 className='text-2xl text-[#0B1B28] capitalize font-bold mb-2'>our mission</h2>
                <p className='text-[14px] text-[#0B1B28] mb-8'>Our mission is to provide quality but affordable books for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of books to satisfy our clients. Exceeding our customers' expectation in their book requirements.</p>
                <div className='flex justify-between items-center '>
                    <div className='relative'>
                        <h4 className='text-[18px] text-[#FF745C] font-bold text-center '>94%</h4>
                        <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                    </div>
                    <div>
                        <h4 className='text-[18px] text-[#452473] text-center font-bold'>72k</h4>
                        <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                    </div>
                    <div>
                        <h4 className='text-[18px] text-[#FF745C] text-center font-bold'>10k</h4>
                        <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                    </div>
                </div>

                <div className='absolute top-[50%] right-[5%] h-[20px] w-[20px] bg-yellow-300 rounded-full '></div>
                <div className='absolute top-[70%] left-[30%] h-[20px] w-[20px] bg-green-300 rounded-full'></div>
                <div className='absolute top-[10%] left-[50%] h-[20px] w-[20px] bg-pink-300 rounded-full'></div>
            </div>
            <div className='w-40%'>
                <img className='bg-[#F8F3FF] w-[280px] h-[350px]' src={man} alt="" />
            </div>
        </div>
    );
};

export default AboutMission;