import React from 'react';
import { Link } from 'react-router-dom';
import contactBanner from '../../asset/Images/contactBanner.jpg';
const ContactBanner = () => {
    return (
        <div className="hero py-[100px] bg-base-200" style={{
            background: `url(${contactBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mt-5 mb-10">Contact Us</h1>
                    <span className='text-xl font-semibold'><Link to="/">Home</Link> / <Link to="/contact">Contact Us</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;