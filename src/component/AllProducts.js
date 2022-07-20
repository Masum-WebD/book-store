import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products)
    return (
        <div>
            <h2 className='uppercase text-primary text-lg mt-16 font-bold'>Popular book</h2>
            <div className='h-[3px] w-[120px] bg-primary mt-2 mx-auto'></div>
            <div className='grid grid-cols-3 container mx-auto my-16 gap-5'>
                {
                    products.slice(0, 6).map(book => <SingleProduct book={book}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;