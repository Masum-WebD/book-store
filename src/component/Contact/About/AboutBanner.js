import React from 'react';
import { Link } from 'react-router-dom';
import contactBanner from '../../../asset/Images/contactBanner.jpg'
const AboutBanner = () => {
    return (
        <div className="hero py-[100px] bg-base-200" style={{
            background: `url(${contactBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold mt-5 mb-10 text-white">About Us</h1>
                    <span className='text-xl font-semibold text-white'><Link to="/">Home</Link> / <Link to="/contact">About Us</Link> </span>

                </div>
            </div>
        </div>
    );
};

export default AboutBanner;