import React from 'react';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OfferNews = () => {
    return (
        <div class="hero py-[100px]" style={{ background: `#B7A930` }}>
            <div class="hero-content text-center font-serif">
                <div class="m-auto w-3/4 text-gray-100">
                    <h2 class="text-3xl  font-semibold font-serif mb-4">Join 100,321 Happy readers And Get Access To Our Entire  Collection Of 1000 ebooks For The Price Of One</h2>
                    <p class=" text-2xl   font-medium  py-4  border-t border-b mb-5">We offer a 45 Day Money Back Guarantee, so joining is risk-free!</p>
                    <button class="btn btn-outline uppercase text-gray-100 font-medium border-2">Sign UP Today <FontAwesomeIcon className="ml-2 text-gray-100" icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
};

export default OfferNews;