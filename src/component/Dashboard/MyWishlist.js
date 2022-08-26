import React, { useEffect, useState } from "react";
import MyWishListProduct from "./MyWishListProduct";
import { useQuery } from "react-query";
import Loading from "../Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const MyWishlist = () => {
  const [user] = useAuthState(auth);
  let {
    data: wishList,
    isLoading,
    refetch,
  } = useQuery("wishList", () =>
    fetch(`http://localhost:5000/wishList?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-10">
      <div className="text-left border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md my-5 p-5">
        <h2 className="text-2xl font-bold text-gray-700">My Wishlist</h2>
        <h3 className="text-xl text-gray-500">
          You have added {wishList?.length} products on your wishlist
        </h3>
      </div>
      <div className=" bg-white">
        {wishList?.map((p) => (
          <MyWishListProduct
            key={p._id}
            product={p}
            refetch={refetch}
          ></MyWishListProduct>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
