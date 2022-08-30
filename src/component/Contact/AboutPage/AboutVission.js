import React from 'react';
import vision from '../../../asset/Images/Vision statement-pana-min.png'
const AboutVission = () => {
    return (

        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={vision} class="rounded-lg lg:w-3/6" alt='' />
                <div>
                    <h2 className='text-5xl text-neutral text-left capitalize font-bold leading-[70px] mb-2'>Our Vision</h2>
                    <p className='text-base text-neutral text-left mb-8'>Our mission is to provide quality but affordable books for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of books to satisfy our clients. Exceeding our customers' expectation in their book requirements.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutVission;