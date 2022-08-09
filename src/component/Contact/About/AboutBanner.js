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
<<<<<<< HEAD
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mt-5 mb-10">About Us</h1>
                    <span className='text-xl font-semibold'><Link to="/">Home</Link> / <Link to="/contact">About Us</Link> </span>
=======
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold mt-5 mb-10 text-white">About Us</h1>
                    <span className='text-xl font-semibold text-white'><Link to="/">Home</Link> / <Link to="/contact">About Us</Link> </span>
>>>>>>> afc8f38b10ae175d5f883e260ed4efde661a2967
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;