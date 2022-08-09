import React from 'react';
import author1 from '../../../asset/Images/author-1.jpg';
import author2 from '../../../asset/Images/author-2.jpg';
import author3 from '../../../asset/Images/author-3.jpg';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutTeam = () => {
    return (
        <div className='bg-gray-100 pt-20 pb-20'>
            <h2 className='text-5xl text-black text-center font-semibold'>Most Popular Authors</h2>
            <div className='container mx-auto sm:grid grid-cols-1 lg:flex justify-center items-center mt-10'>
                <div className='sm:mb-4'>
                    <div className=''>
                        <img src={author1} className='w-full' alt="" />
                    </div>

                    <h3 className='text-3xl text-black font-medium mt-10'>Amy Stevens</h3>
                    <p className='text-gray-400 text-xl'>Author</p>
                    <div className='mt-4'>
                        <FontAwesomeIcon className=" border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-accent hover:text-white" icon={faFacebookF} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faTwitter} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faGooglePlusG} />
                    </div>
                </div>
                <div className='ml-5 sm:mb-4'>
                    <img src={author2} className='w-full' alt="" />
                    <h3 className='text-3xl text-black font-medium mt-10'>Amy Stevens</h3>
                    <p className='text-gray-400 text-xl'>Author</p>
                    <div className='mt-4'>
                        <FontAwesomeIcon className=" border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-accent hover:text-white" icon={faFacebookF} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faTwitter} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faGooglePlusG} />
                    </div>
                </div>
                <div className='ml-5 sm:mb-4'>
                    <img src={author3} className='w-full' alt="" />
                    <h3 className='text-3xl text-black font-medium mt-10'>Amy Stevens</h3>
                    <p className='text-gray-400 text-xl'>Author</p>
                    <div className='mt-4'>
                        <FontAwesomeIcon className=" border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-accent hover:text-white" icon={faFacebookF} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faTwitter} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faGooglePlusG} />
                    </div>
                </div>
                <div className='ml-5'>
                    <img src={author2} className='w-full' alt="" />
                    <h3 className='text-3xl text-black font-medium mt-10'>Amy Stevens</h3>
                    <p className='text-gray-400 text-xl'>Author</p>
                    <div className='mt-4'>
                        <FontAwesomeIcon className=" border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-accent hover:text-white" icon={faFacebookF} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faTwitter} />
                        <FontAwesomeIcon className="ml-3 border border-accent  rounded-full text-accent  hover:bg-accent hover:text-white p-3 h-5 w-5" icon={faGooglePlusG} />
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    );
};

export default AboutTeam;