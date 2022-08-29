import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import Faq from './FAQ/Faq';


const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <ContactForm />
            <Faq></Faq>
        </div>
    );
};

export default Contact;