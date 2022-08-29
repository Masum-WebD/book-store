import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EachProductForShop = ({ book }) => {
  const { _id, name, img, author, price } = book;
  console.log(book);
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div class="shadow h-[340px] relative gap-5 p-2 border-box">
      <img className="object-scale-down h-[160px] w-[115px] rounded-sm" src={img} alt="" />
      <div className="text-left  mt-2 flex flex-col text-accent">
        <h2 className="font-bold mb-2 text-neutral">{name}</h2>
        <p><span className="font-medium text-gray-800">${price}</span></p>
        <div className="mt-[15px] absolute bottom-[20px]">
          <button
            onClick={() => navigateToProductDetail(_id)}
            style={{ marginTop: "auto", maxWidth: "155px" }}
            className="bg-white hover:bg-primary text-[14px] text-primary hover:text-white py-2 px-5 border border-primary rounded-sm capitalize"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachProductForShop;
