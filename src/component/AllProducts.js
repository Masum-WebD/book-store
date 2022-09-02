import React, {useEffect} from "react";
import SingleProduct from "./SingleProduct";
import { useQuery } from "react-query";
import Loading from "./Loading";
import {fetchProducts} from "../store/productSlice"
import {STATUSES} from "../store/productSlice"
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const dispatch =useDispatch()
  const {data:products,status} =useSelector((state)=>state.product)
  // const { data: products, isLoading } = useQuery("popularBooks", () => fetch("https://book-store-46yi.onrender.com/products").then(res => res.json()));
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch ])

  // if (isLoading) {
  //   return <Loading />
  // }
  if (status === STATUSES.LOADING) {
    return <Loading />
  }

  return (
    <div className="max-w-[1196px] mx-auto">
      <h2 className="capitalize text-neutral text-3xl mt-20 font-bold">
        Popular books
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:px-0 px-4 md:container mx-auto my-16 gap-5">
        {products?.slice(0, 10).map((book) => (
          <SingleProduct book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
