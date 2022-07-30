import React from "react";
import { useNavigate } from "react-router-dom";

const AllProductSingle = ({ book }) => {
  const { _id, name, img, author, price } = book;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div class="flex shadow-lg gap-5 p-5 border-box border rounded-md">
      <img className="object-scale-down h-[160px] w-[115px]" src={img} alt="" />
      <div className="text-left flex flex-col text-accent">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-800 my-2">By <span className="text-primary">{author}</span></p>
        <p><span className="line-through text-gray-600">$1500</span> <span className="font-bold">${price}</span></p>
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

export default AllProductSingle;
