import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import CheckoutSummary from "./CheckoutSummary";
import ShopUserInfo from "./ShopUserInfo";

const AddToCart = () => {
  const [cartProduct, setcartProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cartproduct")
      .then((res) => res.json())
      .then((data) => setcartProduct(data));
  }, []);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="pt-32 pb-16 flex flex-col-reverse lg:flex-row gap-10 text-left text-neutral container mx-auto">
        <div className=" lg:w-1/2 px-6 lg:px-0">
          <ShopUserInfo />
        </div>
        <div className=" lg:w-1/2 px-6 lg:px-0">
          <h2 className="text-2xl text-left text-neutral font-medium mt-5 lg:mt-0 mb-4">Order Summary</h2>
          <div className=" bg-white">
            {cartProduct.map((p) => (
              <CartProduct key={p._id} product={p}></CartProduct>
            ))}
            <CheckoutSummary/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddToCart;
