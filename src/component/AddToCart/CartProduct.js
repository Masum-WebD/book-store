import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const CartProduct = ({ product }) => {
  const { bookName, bookAuthor, bookPrice, bookImage, bookQty, bookStock } =
    product;
    const emailRef = useRef()

  const increaseButton = (e) => {
    e.preventDefault();
    const quantity = e.target.number.value;
    
    // const email =emailRef.current.value;
    console.log('hi', quantity );
  };

  return (
    <div className=" ">
      <div className="text-black flex  border justify-between  ">
        <div className=' flex'>
          <img className="w-[50px] h-[80px] mr-2" src={bookImage} alt="" />
          <div>
          <p className="text-sm font-bold ">{bookName} </p>
          <p>by {bookAuthor}</p>
          <h1 className=" align-text-bottom font-bold ">$ {bookPrice}</h1>
          </div>
        </div>
         
        <div className=" font-bold ">
        <button>
            <FontAwesomeIcon className="text-[#fa6a6a] mb-8 " icon={faTrashCan}></FontAwesomeIcon>
          </button><br /> 
          <select name="" id="" className="align-bottom mr-0" >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
        </div>
          
      </div>

      
    </div>
  );
};

export default CartProduct;
