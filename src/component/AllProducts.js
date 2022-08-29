import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
// import { fetchProducts, STATUSES } from "../store/productSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from "./Loading";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  // const { data: products, status } = useSelector((state) => state.product);
  // const dispatch = useDispatch();
  useEffect(() => {

    fetch("https://the-online-book-shop.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // if (status === STATUSES.LOADING) {
  //   return <Loading />;
  // }
  // if (status === STATUSES.ERROR) {
  //   return <h2 className="text-black">Product not found!</h2>;
  // }
  return (
    <div className="max-w-[1140px] mx-auto">
      <h2 className="capitalize text-neutral text-3xl mt-20 font-bold">
        Popular books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 px-4 md:container mx-auto my-16 gap-5">
        {products.slice(0, 10).map((book) => (
          <SingleProduct book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
