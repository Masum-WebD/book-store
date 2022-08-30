import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllTopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch("https://the-online-book-shop.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-[1196px] mx-auto">
      <h2 className="capitalize text-neutral text-3xl mt-20 font-bold">
        Top selling books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 lg:px-0 px-4 md:container mx-auto my-16 gap-5">
        {products.slice(12, 17).map((book) => (
          <SingleProduct book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllTopProducts;
