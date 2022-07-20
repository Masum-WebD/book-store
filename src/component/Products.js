import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
                fetch('package.json')
                .then(res => res.json)
                .then(data => setProducts(data))
              } , []);
    return (
        <div>
            
        </div>
    );
};

export default Products;

// const products = () => {

//     const [products, setProducts] = useState([]);
//     

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default products;