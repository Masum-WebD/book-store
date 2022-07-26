import React from 'react';
import about from '../../../asset/Images/about.jpg'
const AboutDetails = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 mt-20 mb-10'>
            <div>
                <img src={about} className="w-full p-4" alt="" />
            </div>
            <div className='text-start font-serif pl-5'>
                <h2 className='text-4xl text-black font-bold '>About US</h2>
                <p className='text-xl text-gray-500 mt-5 leading-7'>Nowadays, the network plays an import role in people’s life. In the process of the improvement of the people’s living standard, people’s demands of the life’s quality and efficiency is more higher, the traditional bookstore’s inconvenience gradually emerge, and the online bookstore has gradually be used in public.</p>
                <p className='text-xl text-gray-500 mt-2 leading-7'>The online bookstore is a revolution of book industry. The traditional bookstores’ operation time, address and space is limited, so the types of books and books to find received a degree of restriction. But the online bookstore broke the management mode of traditional bookstore, as long as you have a computer, you can buy the book anywhere, saving time and effort, shortening the time of book selection link effectively. The online bookstore system based on the principle of provides convenience and service to people</p>
                <p className='text-xl text-gray-500 mt-2 leading-7'>The online bookstore is a revolution of book industry. The traditional bookstores’ operation time, address and space is limited, so the types of books and books to find received a degree of restriction.</p>
            </div>
        </div>
    );
};

export default AboutDetails;