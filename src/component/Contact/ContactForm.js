import React from 'react';
import { faFacebookF, faGooglePlusG, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faCartShopping, faGlobe, faLocationDot, faMagicWandSparkles, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formControl = e => {
    e.preventDefault();
}

const ContactForm = () => {
    return (
        <div className='md:block lg:flex justify-around container lg:p-20 p-4'>
            <div className=' md: w-full lg:w-1/2 text-start'>
                <h2 className='text-2xl text-black uppercase font-medium'>Contact Form</h2>
                <p className='text-xl text-gray-500 mt-6'>Send an Email. All Fields with an asterisk (*) are required.</p>
                <form onSubmit={formControl} className='mt-8'>
                    <div className='md:block lg:flex justify-between'>
                        <div>
                            <label htmlFor="" className='text-xl text-gray-400'>Name*</label>
                            <input type="text" class="input  input-accent w-full  text-black" required />
                        </div>
                        <div className='md:ml-0 lg:ml-5'>
                            <label htmlFor="" className='text-xl text-gray-400'>Email*</label>
                            <input type="email" class="input input-accent w-full  text-black" required />

                        </div>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl text-gray-400'>Subject</label>
                        <input type="text" class="input input-accent w-full text-black" />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl text-gray-400'>Message*</label>
                        <textarea class="textarea textarea-accent w-full lg:h-60 text-black" required></textarea>
                    </div>
                    <div className='text-center mt-5'>
                        <button className="btn btn-accent w-1/2">Submit</button>
                    </div>
                </form>
            </div>
            <div className='md:ml-0 md:w-full lg:ml-20 lg:w-1/2  text-start'>
                <h2 className='text-2xl text-black uppercase font-medium'>Book Store</h2>
                <p className='text-xl text-gray-500 text-justify mt-4 leading-7'>As long as members join, they can search to find products they want and so on. Environmental development is maturing even easier than ever before we can establish their own e-commerce system for small. In order to clarify the issue of this study hope that the customer purchase process from the basic value and technology perspective followed to managers logistics.</p>
                <div className='md:block lg:flex justify-between mt-10'>
                    <div className='md:w-full lg:w-1/2'>
                        <h2 className='text-xl text-black font-medium uppercase'>Contact</h2>

                        <div className='text-start  mt-4 font-medium'>
                            <div className='flex items-center'>
                                <p><FontAwesomeIcon className="mt-2 border border-accent rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faLocationDot} /> </p>
                                <p className='text-xl text-black ml-6'>Broklin, My Street</p>
                            </div>
                            <div className='flex  items-center'>
                                <p> <FontAwesomeIcon className="mt-2 border border-accent rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faCartShopping} /> </p>
                                <p className='text-xl text-black ml-6'>NY 10036</p>
                            </div>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faMagicWandSparkles} /></p>
                                <p className='text-xl text-black ml-6'>NY 10036</p>

                            </div>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border  border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faBuilding} /></p>
                                <p className='text-xl text-black ml-6'>United States
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <p> <FontAwesomeIcon className="mt-2 border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faPhone} /></p>
                                <p className='text-xl text-black ml-6 '>+04321 0123456
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <p><FontAwesomeIcon className="mt-2 border border-accent  rounded-full text-accent p-3 h-5 w-5 hover:bg-primary hover:text-white" icon={faGlobe} /></p>
                                <p className='text-xl text-black ml-6'>http://www.example.com</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className='md:w-full lg:w-1/2'>
                        <h2 className='text-xl text-black font-medium uppercase'>Links</h2>

                        <div className='mt-4 font-medium'>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border hover:bg-primary  bg-sky-600 text-white rounded-full p-3 h-5 w-5" icon={faFacebookF} /></p>
                                <p className='text-xl text-black ml-6'>Facebook</p>
                            </div>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border hover:bg-primary bg-sky-400 text-white rounded-full p-3 h-5 w-5" icon={faTwitter} /></p>
                                <p className='text-xl text-black ml-6'>Twitter</p>
                            </div>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border hover:bg-primary bg-pink-600 text-white rounded-full p-3 h-5 w-5" icon={faGooglePlusG} /></p>
                                <p className='text-xl text-black ml-6'>Google Plus</p>
                            </div>
                            <div className='flex  items-center'>
                                <p><FontAwesomeIcon className="mt-2 border hover:bg-primary bg-pink-700 text-white rounded-full p-3 h-5 w-5" icon={faPinterestP} /></p>
                                <p className='text-xl text-black ml-6'>Google Plus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactForm;