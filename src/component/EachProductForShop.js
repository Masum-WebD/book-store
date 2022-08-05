import React from 'react';

const EachProductForShop = ({ book }) => {

    const { name, img, author, price } = book;

    return (
        <div class="flex shadow-lg gap-5 p-5 border-box border rounded-md">
            <img className="object-scale-down h-[160px] w-[115px]" src={img} alt="" />
            <div className="text-left flex flex-col text-accent">
                <h2 className="text-md font-medium text-gray-800">{name}</h2>
                <p className="text-gray-800 my-1 text-sm">By: <span className="text-primary">{author}</span></p>
                <p><span className="line-through text-gray-600">$1500</span> <span className="font-medium text-gray-800">${price}</span></p>
                <button
                    style={{ marginTop: "auto", maxWidth: "155px" }}
                    className="bg-primary btn text-white py-2 px-5 border-0 hover:bg-green-800 rounded-sm mt-4 uppercase"
                >
                    View Product
                </button>
            </div>
        </div>
    );
};

export default EachProductForShop;