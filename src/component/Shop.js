import React, { useEffect, useState } from 'react';
import EachProductForShop from './EachProductForShop';

const Shop = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://p-hero-bookshop.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <section className='py-20'>

            <div className='grid lg:grid-cols-3 gap-8 lg:px-4 px-3'>
                {
                    books.map((book) => (
                        <EachProductForShop key={book._id} book={book}></EachProductForShop>
                    ))
                }
            </div>

        </section>
    );
};

export default Shop;