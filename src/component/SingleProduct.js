import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ book }) => {
  const { _id, name, img, category, language, author, price, stock } = book;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div class="flex shadow-lg gap-5 p-5 border-box">
      <img className="object-scale-down h-[160px] w-[115px]" src={img} alt="" />
      <div className="text-left flex flex-col text-accent">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{author}</p>
        <p>${price}</p>
        <button
          onClick={() => navigateToProductDetail(_id)}
          style={{ marginTop: "auto", maxWidth: "155px" }}
          className="bg-primary text-white py-2 px-5 rounded-sm mt-4 uppercase"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
