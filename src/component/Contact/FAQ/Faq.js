import React, { useState } from 'react';
import { faqsData } from './data';
import FaqData from './FaqData';
const Faq = () => {
    console.log(faqsData);
    const [faqs, setFaqs] = useState(faqsData);
    return (
        <main className='container bg-gray-100 flex justify-center items-center p-4 h-fit mb-10'>
            <section className='w-full bg-white rounded p-4'>
                <h1 className='text-center text-3xl font-bold text-black'>FAQs</h1>
                {faqs.map(faq => <FaqData
                    key={faq.id}
                    {...faq}
                ></FaqData>)}
            </section>
        </main>


    );
};

export default Faq;