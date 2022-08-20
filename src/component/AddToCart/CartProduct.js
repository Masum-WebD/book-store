import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef, useState} from "react"

const CartProduct = ({ product,handleDeleteBtn}) => {
  const { name, author, price, img,_id } =product;

  const elementRef =useRef('null')

 const quantity =e=>{

  e.preventDefault();
  
  const qty = elementRef.current.value
  const totalPrice = price *qty
  console.log(totalPrice)
 }
    
  return (
    
    <div className="p-5 rounded border border-red-100">
      <div className="flex gap-3">
        <div>
          <img className="w-16" src={img} alt="" />
        </div>
        <div className="w-full">


          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{name} </p>
              <p className="text-sm">by {author}</p>
            </div>
            <button onClick={()=>handleDeleteBtn(_id)} >
              <FontAwesomeIcon className="text-[#fa6a6a]" icon={faTrashCan}></FontAwesomeIcon>
            </button>
          </div>


          <div className=" mt-5">
            <div className="flex justify-between items-start">
              <h1 className=" align-text-bottom font-medium text-sm ">$ {price }</h1>
              <select onClick={(e) =>quantity(e)} ref={elementRef} name="quantity" id=""  className="align-bottom mr-0 bg-white border border-red-100" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CartProduct;
