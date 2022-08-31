import React from 'react';
import PageTitle from '../PageTitle';
import ContactBannerSolid from './ContactPage/ContactBannerSolid';
import ContactFormSolid from './ContactPage/ContactFormSolid';



const Contact = () => {
    return (
        <div className='p-3 lg:p-0'>
            <div>
                <PageTitle title="Contact Us" />
                <ContactBannerSolid></ContactBannerSolid>
                <ContactFormSolid></ContactFormSolid>
            </div>
        </div>
    );
};

export default Contact;