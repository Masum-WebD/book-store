import React, { useState } from 'react';

const FaqData = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <article className='w-9/12 bg-slate-50 m-4 p-4 rounded mx-auto shadow-md'>
            <div className='flex justify-between'>
                <h4 className='text-[16px] text-[#0B1B28] font-bold'>{title}</h4>
                <button className='bg-[#27AE61] w-4' onClick={() => { setToggle(!toggle) }}>{toggle ? '-' : '+'}</button>
            </div>
            {toggle && <p className='text-justify text-[#39454F] text-[14px] leading-5 mt-2'>{desc}</p>}
        </article>
    );
};

export default FaqData;