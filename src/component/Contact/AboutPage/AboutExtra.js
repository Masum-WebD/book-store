import React from 'react';
import { Link } from "react-router-dom";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutExtra = () => {
    return (
        <div className='container mx-auto mb-[100px]'>
            <h2 className='text-3xl text-[#0B1B28] font-bold mb-4'>Beliving neglected so so allowance</h2>
            <p className='text-[14px] text-[#0B1B28]  mb-4'>We so opinion friends me message delight. Whole front do of <br /> plate heard oh ought. His defective convinced residence own.</p>
            <Link to='/contact'> <button className='btn-sm bg-[#FF745C] border-none rounded hover:bg-[#df4d33] text-white'>We opinion customer message as delight</button></Link>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto mt-12'>
                <div class="card w-full bg-white shadow-lg text-primary-content">
                    <div className="p-4 text-left">
                        <div className='w-10 h-10 bg-[#F8F3FF]  rounded mb-4'>
                            <FontAwesomeIcon className='p-3 text-[#df4d33]' icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <h2 class="text-[#0B1B28] font-bold text-[18px] mb-3">Let ask possible mistress!</h2>
                        <p className='text-[#0B1B28] text-[14px]'>Connection ha put impossible oen apartment boisterious. At jointure ladyship an insisted humanity he. Friendly bachelor entrace to on by.</p>
                    </div>
                </div>
                <div class="card w-full bg-white shadow-lg text-primary-content">
                    <div className="p-4 text-left">
                        <div className='w-10 h-10 bg-[#F8F3FF]  rounded mb-4'>
                            <FontAwesomeIcon className='p-3 text-[#df4d33]' icon={faLocationDot}></FontAwesomeIcon>
                        </div>
                        <h2 class="text-[#0B1B28] font-bold text-[18px] mb-3">Let ask possible mistress!</h2>
                        <p className='text-[#0B1B28] text-[14px]'>Connection ha put impossible oen apartment boisterious. At jointure ladyship an insisted humanity he. Friendly bachelor entrace to on by.</p>
                    </div>
                </div>
                <div class="card w-full bg-white shadow-lg text-primary-content">
                    <div className="p-4 text-left">
                        <div className='w-10 h-10 bg-[#F8F3FF] rounded mb-4'>
                            <FontAwesomeIcon className='p-3 text-[#df4d33]' icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                        <h2 class="text-[#0B1B28] font-bold text-[18px] mb-3">Let ask possible mistress!</h2>
                        <p className='text-[#0B1B28] text-[14px]'>Connection ha put impossible oen apartment boisterious. At jointure ladyship an insisted humanity he. Friendly bachelor entrace to on by.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutExtra;