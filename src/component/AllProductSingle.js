import React from 'react';

const AllProductSingle = ({ book }) => {
    const { name, img, category, language, author, price, stock } = book;
    return (

        <div class="flex shadow-lg gap-5 p-5 border-box">
            <img className='object-scale-down h-[160px] w-[115px]' src={img} alt="" />
            <div className='text-left flex flex-col text-accent'>
                <h2 className='text-lg font-bold'>{name}</h2>
                <p>{author}</p>
                <p>${price}</p>
                <button style={{marginTop:'auto', maxWidth:'155px'}} className='bg-primary text-white py-2 px-5 rounded-sm mt-4 uppercase'>View Product</button>
            </div>
        </div>

    );
};

export default AllProductSingle;