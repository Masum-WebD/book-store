import React from "react";
import SingleProduct from "./SingleProduct";
import Loading from './Loading';
import { useQuery } from "react-query";

const AllProducts = () => {

  const { data, isLoading } = useQuery("PopularBooks", () => fetch('https://p-hero-bookshop.herokuapp.com/products').then(res => res.json()));

  console.log(data)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h2 className="uppercase text-primary text-lg mt-20 font-bold">
        Popular books
      </h2>
      <div className="h-[3px] w-[120px] bg-primary mt-2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:container mx-auto my-16 gap-5">
        {data?.slice(0, 6)?.map((book) => (
          <SingleProduct key={book?._id} book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
