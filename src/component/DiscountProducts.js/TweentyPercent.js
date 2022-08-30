import React, { useEffect, useState } from "react";
import TweentyPercentSingle from "./TweentyPercentSingle";
import Carousel from "react-elastic-carousel";

const TweentyPercent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://book-store-46yi.onrender.com/products")
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
    <div className="container mx-auto my-8 rounded-md shadow-lg">
      <div className="flex justify-between items-center px-10">
        <div>
          <h2 className="uppercase text-gray-800  text-2xl font-bold">
            Up to <span className="text-secondary">20%</span> Off Fall's Biggest
            Books
          </h2>
        </div>
        <div className="text-gray-700 cursor-pointer hover:text-primary font-bold">
          <a>See All</a>
        </div>
      </div>
      <div className="px-4 md:container mx-auto mt-16 lg:mb-0 mb-16">
        <Carousel breakPoints={breakPoints}>
          {products.slice(36, 48).map((book) => (
            <TweentyPercentSingle book={book}></TweentyPercentSingle>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TweentyPercent;
