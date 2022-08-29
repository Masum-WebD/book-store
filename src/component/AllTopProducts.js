import React, { useEffect, useState } from "react";
import AllProductSingle from "./AllProductSingle";

const AllTopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch("https://the-online-book-shop.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-28">
      <h2 className="uppercase text-gray-700 text-3xl mt-20 font-bold">
        Top Selling books
      </h2>
      <div className="h-[3px] w-[120px] bg-primary mt-2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:container mx-auto mt-16 lg:mb-0 gap-5">
        {products.slice(9, 12).map((book) => (
          <AllProductSingle book={book}></AllProductSingle>
        ))}
      </div>
    </div>
  );
};

export default AllTopProducts;
