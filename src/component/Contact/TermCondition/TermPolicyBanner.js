import React from 'react';
import { Link } from 'react-router-dom';
const TermPolicyBanner = () => {
    return (
        <div className="hero py-[100px] bg-[#F8F3FF]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl text-[#0B1B28] font-bold mt-5 mb-10">Term & Condition</h1>
                    <span className='text-xl text-[#0B1B28] font-semibold'><Link to="/">Home</Link> / <Link to="/contact">Term & condition</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default TermPolicyBanner;