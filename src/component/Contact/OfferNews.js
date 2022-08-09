import React from 'react';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OfferNews = () => {
    return (
        <div className="hero py-[100px] bg-gray-100" >
            <div className="hero-content text-center font-serif">
                <div className="m-auto w-3/4 text-black">
                    <h2 className="text-3xl  font-semibold font-serif mb-4">Join 100,321 Happy readers And Get Access To Our Entire  Collection Of 1000 ebooks For The Price Of One.</h2>
                    <p className=" text-2xl   font-medium  py-4  border-t border-b mb-5">We offer a 45 Day Money Back Guarantee, so joining is risk-free!</p>
                    <button className="btn btn-outline-primary uppercase text-font-medium border-2">Sign UP Today <FontAwesomeIcon className="ml-2 text-gray-100" icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
};

export default OfferNews;