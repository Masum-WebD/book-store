import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import ThirtyPercentSingle from "./ThirtyPercentSingle";

const ThirtyPercent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="container mx-auto my-16">
      <div className="flex justify-between items-center px-10">
        <div>
          <h2 className="uppercase text-primary italic text-3xl font-bold">
          Up to <span className="text-gray-800 text-4xl">30%</span> Off Novels Books
          </h2>
        </div>
        <div className="text-gray-700 cursor-pointer hover:text-primary font-bold">
          <a className="">See All</a>
        </div>
      </div>
      <div className="px-4 md:container mx-auto mt-16 lg:mb-0 mb-16">
        <Carousel breakPoints={breakPoints}>
          {products.slice(50, 68).map((book) => (
              <ThirtyPercentSingle book={book}></ThirtyPercentSingle>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ThirtyPercent;
