import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import CheckoutSummary from "./CheckoutSummary";
import ShopUserInfo from "./ShopUserInfo";

const AddToCart = () => {
  const [cartProduct, setcartProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cartProduct")
      .then((res) => res.json())
      .then((data) => setcartProduct(data));
  }, []);

  return (
    <div className="flex  bg-[#e2dcdc]">
      <div className="text-black my-20">
        <ShopUserInfo />
      </div>
      <div className="card mx-24 my-20  ">
        {cartProduct.map((p) => (
          <CartProduct key={p._id} product={p}></CartProduct>
        ))}
        <CheckoutSummary />
      </div>  
    </div>
  );
};

export default AddToCart;
