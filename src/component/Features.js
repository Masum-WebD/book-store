import React from 'react';
import gift from '../asset/Icons/gift.png';
import onlineOrder from '../asset/Icons/order.png';
import usedBooks from '../asset/Icons/book-stack.png';
import returnBook from '../asset/Icons/return.png';
import fastDeli from '../asset/Icons/packing.png';

const Features = () => {
    return (
        <section className='lg:px-32 px-3 my-28'>

            <div className='grid lg:grid-cols-5 grid-cols-2 gap-5'>

                <div className='border border-gray-[#D8DBDD] rounded-2xl p-12'>
                    <div>
                        <img src={gift} className="w-11 mx-auto" alt="" />
                        <p className='text-neutral'>Free Gift <br />Wrapping</p>
                    </div>
                </div>

                <div className='border border-gray-[#D8DBDD] rounded-2xl p-12'>
                    <div>
                        <img src={onlineOrder} className="w-11 mx-auto" alt="" />
                        <p className='text-neutral'>Free Gift <br />Wrapping</p>
                    </div>
                </div>

                <div className='border border-gray-[#D8DBDD] rounded-2xl p-12'>
                    <div>
                        <img src={usedBooks} className="w-11 mx-auto" alt="" />
                        <p className='text-neutral'>Free Gift <br />Wrapping</p>
                    </div>
                </div>

                <div className='border border-gray-[#D8DBDD] rounded-2xl p-12'>
                    <div>
                        <img src={returnBook} className="w-11 mx-auto" alt="" />
                        <p className='text-neutral'>Free Gift <br />Wrapping</p>
                    </div>
                </div>

                <div className='border border-gray-[#D8DBDD] rounded-2xl p-12'>
                    <div>
                        <img src={fastDeli} className="w-11 mx-auto" alt="" />
                        <p className='text-neutral'>Free Gift <br />Wrapping</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Features;