import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
                fetch('books.json')
                .then(res => res.json())
                .then(data => setProducts(data))
              } , []);
              console.log(products)
    return (
        <div className='grid grid-cols-3 container mx-auto my-16 gap-5'>
            {
                products.slice(0,6).map(book =><SingleProduct book={book}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;