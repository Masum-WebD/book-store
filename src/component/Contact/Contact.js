import React from 'react';
import PageTitle from '../PageTitle';
import ContactBannerSolid from './ContactPage/ContactBannerSolid';
import ContactFormSolid from './ContactPage/ContactFormSolid';



const Contact = () => {
    return (
        <div>
            <PageTitle title="Contact Us" />
            <ContactBannerSolid></ContactBannerSolid>
            <ContactFormSolid></ContactFormSolid>

        </div>
    );
};

export default Contact;