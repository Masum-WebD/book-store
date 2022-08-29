import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactFormSolid = () => {

    const formControl = e => {
        e.preventDefault();
        e.target.reset();
        console.log('click')
    }
    return (
        <div className='container lg:w-[1196px] sm:block lg:flex justify-around items-center w-fit mx-auto text-justify bg-[#FFF9F9] p-5 lg:h-screen'>
            <div className='bg-[#452473] p-12 sm:w-full lg:w-[35%] relative h-[450px] overflow-hidden sm:mb-6 lg:mb-0'>
                <h3 className='text-2xl capitalize font-medium text-white mb-2'>Contact Information</h3>
                <p className=' text-[14px] capitalize text-white font-normal mt-2'>Fill Up the form and our team <br />
                    will get you as soon as possible</p>
                <div className='text-justify flex mt-8 text-white ml-2'>
                    <div>
                        <p className='text-[#FFBCB1] text-[15px] mb-4'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></p>
                        <p className='text-[#FFBCB1] text-[15px] mb-4'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></p>
                        <p className='text-[#FFBCB1] text-[15px] mb-4'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></p>
                    </div>
                    <div>
                        <p className='text-[14px] mb-4 ml-4'>+ 012 34567890</p>
                        <p className='text-[14px] mb-4 ml-4'>email@bookstore.com</p>
                        <p className='text-[14px] mb-4 ml-4'>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='text-[#FFBCB1] mt-4'>
                    <FontAwesomeIcon className='w-[15px] h-[15px] rounded-full hover:bg-[#6f41ae] p-2' icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon className='ml-4 w-[15px] h-[15px] rounded-full hover:bg-[#6f41ae] p-2' icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className='ml-4 w-[15px] h-[15px] rounded-full hover:bg-[#6f41ae] p-2' icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon className='ml-4 w-[15px] h-[15px] rounded-full hover:bg-[#6f41ae] p-2' icon={faLinkedinIn}></FontAwesomeIcon>
                </div>
                <div className='absolute bg-[#FFBCB1] h-[300px] w-[300px] rounded-full bottom-[-40%] right-[-40%]'>
                </div>

                <div className='absolute bg-[#824DCB] h-[100px] w-[100px] rounded-full left-[65%] top-[70%]'>

                </div>

            </div>
            <div className='bg-[#FFF9F9] sm:w-full lg:w-[60%] sm:ml-0 lg:ml-10 lg:mt-0'>
                <form onSubmit={formControl} action="https://formsubmit.co/dd3899985@gmail.com" method="POST">
                    <input type="text" name='fname' placeholder="First Name" class="outline-0 border-b-2 border-[#D9D9D9] text-[#0B1B28] p-2 bg-[#FFF9F9] w-full lg:max-w-xs sm:mt-6 lg:mt-0" />
                    <input type="text" name='lname' placeholder="Last Name" class="outline-0 border-b-2 border-[#D9D9D9] text-[#0B1B28] p-2 md:ml-0 lg:ml-8 bg-[#FFF9F9] w-full lg:max-w-xs" />
                    <br />
                    <input type="email" name='email' placeholder="Email" class="outline-0  mt-4 border-b-2 border-[#D9D9D9] text-[#0B1B28] p-2 bg-[#FFF9F9] w-full " />
                    <br />
                    <input type="text" name='msg' placeholder="Message" class="outline-0 mt-4  border-b-2 border-[#D9D9D9] text-[#0B1B28] p-2 bg-[#FFF9F9] w-full " />
                    <input type="submit" className='bg-[#FF745C] hover:bg-[#ed6249]  text-white mt-10 p-2 w-full' value="Sumbit" />
                </form>
            </div>

        </div>
    );
};

export default ContactFormSolid;