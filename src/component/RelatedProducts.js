import React from "react";
import { useNavigate } from "react-router-dom";
import "./RelatedProducts.css";

const RelatedProducts = ({ book }) => {
  const { _id, name, img, price, author } = book;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <figure class="card img-container">
      <div className="flex shadow-lg gap-5 p-5 rounded-md ml-5 lg:overflow-auto">
        <img
          className="object-scale-down h-[160px] w-[115px]"
          src={img}
          alt=""
        />
        <div className="text-left flex flex-col text-accent">
          <h2 className="text-md font-medium text-base-100">{name}</h2>
          <p className="text-base-100 my-1 text-sm">
            By <span className="text-primary">{author}</span>
          </p>
          <p>
            <span className="line-through text-base-100">$1500</span>{" "}
            <span className="font-medium text-primary">${price}</span>
          </p>
        </div>
      </div>

      <figcaption>
        <h3>
          <button
            onClick={() => navigateToProductDetail(_id)}
            style={{ marginTop: "auto", maxWidth: "155px" }}
            className="bg-primary btn text-white py-2 px-5 border-0 hover:bg-green-800 rounded-sm mt-4 uppercase"
          >
            View Product
          </button>
        </h3>
      </figcaption>
    </figure>
  );
};

export default RelatedProducts;