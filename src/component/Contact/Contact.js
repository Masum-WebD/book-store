import React from 'react';
import ContactBannerSolid from './ContactPage/ContactBannerSolid';
import ContactFormSolid from './ContactPage/ContactFormSolid';



const Contact = () => {
    return (
        <div className='p-3 lg:p-0'>
            <ContactBannerSolid></ContactBannerSolid>
            <ContactFormSolid></ContactFormSolid>

        </div>
    );
};

export default Contact;