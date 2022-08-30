import React from "react";
import SingleProduct from "./SingleProduct";
import { useQuery } from "react-query";
import Loading from "./Loading";

const AllProducts = () => {

  const { data: products, isLoading } = useQuery("popularBooks", () => fetch("https://book-store-46yi.onrender.com/products").then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="max-w-[1196px] mx-auto">
      <h2 className="capitalize text-neutral text-3xl mt-20 font-bold">
        Popular books
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:px-0 px-4 md:container mx-auto my-16 gap-5">
        {products?.slice(0, 10).map((book) => (
          <SingleProduct book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
