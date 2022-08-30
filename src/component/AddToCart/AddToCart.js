import useCartBooks from "../Hooks/useCartBooks";
import CartProduct from "./CartProduct";
import CheckoutSummary from "./CheckoutSummary";
import ShopUserInfo from "./ShopUserInfo";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";

const AddToCart = () => {
  const [cartProduct, setCartProduct] = useCartBooks()


  const handleDeleteBtn = (id, e) => {

    Swal.fire({
      title:
        "Are you sure to delete it? Then this product may not be in our stock!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27AE61",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowEnterKey: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://book-store-46yi.onrender.com/cartProduct/${id}`
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {

            const remaining = cartProduct.filter((product) => product._id !== id);
            setCartProduct(remaining);

            console.log(data)

          })
      }
    })



  }

  return (
    <div className="bg-[#F9FAFB] lg:px-20">
      <div className="pt-16 lg:pt-32 pb-16 flex flex-col-reverse lg:flex-row gap-10 text-left text-neutral container mx-auto">
        <div className=" lg:w-1/2 px-6 lg:px-0">
          <ShopUserInfo />
        </div>
        <div className=" lg:w-1/2 px-6 lg:px-0">
          <h2 className="text-2xl text-left text-neutral font-medium mt-5 lg:mt-0 mb-4">
            Order Summary
          </h2>

          <div className=" bg-white">
            {cartProduct.map((p) => (

              <CartProduct key={p._id} product={p} handleDeleteBtn={handleDeleteBtn}></CartProduct>

            ))}
            <CheckoutSummary />
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddToCart;
