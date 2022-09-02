import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react"

const CartProduct = ({ product, handleDeleteBtn }) => {
  const { bookName, price, quantity, img, _id } = product;


  //  const quantity =e=>{
  //   e.preventDefault();  

  //   console.log(totalPrice)
  //  }

  return (

    <div className="p-5 rounded border border-red-100">
      <div className="flex gap-3">
        <div>
          <img className="w-24" src={img} alt="" />
        </div>
        <div className="w-full">


          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{bookName} </p>
              <br />
              <p className="font-medium">Quantity : {quantity} </p>
            </div>
            <button onClick={() => handleDeleteBtn(_id)} >
              <FontAwesomeIcon className="text-[#fa6a6a]" icon={faTrashCan}></FontAwesomeIcon>
            </button>
          </div>


          <div className=" mt-5">
            <div className="flex justify-between items-start">
              <h1 className=" align-text-bottom font-medium text-sm ">$ {Number(price) * Number(quantity)}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CartProduct;
