import React, { useEffect, useState } from "react";
import AllProductSingle from "./AllProductSingle";

const AllTopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://p-hero-bookshop.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className="uppercase text-primary text-lg mt-16 font-bold">
        Top Selling books
      </h2>
      <div className="h-[3px] w-[120px] bg-primary mt-2 mx-auto"></div>
      <div className="md:grid grid-cols-3 px-4 md:container mx-auto my-16 gap-5">
        {products.slice(9, 12).map((book) => (
          <AllProductSingle book={book}></AllProductSingle>
        ))}
      </div>
    </div>
  );
};

export default AllTopProducts;
