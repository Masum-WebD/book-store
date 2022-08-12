import React, { useEffect, useState } from "react";
import MyWishListProduct from "./MyWishListProduct";

const MyWishlist = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("https://p-hero-bookshop.herokuapp.com/wishList")
      .then((res) => res.json())
      .then((data) => setWishList(data));
  }, []);
  const handleRemove = (_id) => {
    return wishList.filter((item) => item._id !== _id);
  };

  return (
    <div className="mx-10">
      <div className="text-left border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md my-5 p-5">
        <h2 className="text-2xl font-bold text-gray-700">My Wishlist</h2>
        <h3 className="text-xl text-gray-500">
          You have added {wishList.length} products on your wishlist
        </h3>
      </div>
      <div className=" bg-white">
        {wishList.map((p) => (
          <MyWishListProduct
            key={p._id}
            product={p}
            handleRemove={handleRemove}
          ></MyWishListProduct>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
