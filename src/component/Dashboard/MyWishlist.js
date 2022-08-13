import React, { useEffect, useState } from "react";
import MyWishListProduct from "./MyWishListProduct";

const MyWishlist = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("https://p-hero-bookshop.herokuapp.com/wishList")
      .then((res) => res.json())
      .then((data) => setWishList(data));
  }, []);
  const handleDeleteBtn = (_id) => {
    const request = window.confirm("Are you sure you want to delete");
    if (request) {
      fetch(`http://localhost:5000/wishList/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = wishList.filter((product) => product._id !== _id);
          setWishList(remaining);
        });
    }
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
            handleRemove={handleDeleteBtn}
          ></MyWishListProduct>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
