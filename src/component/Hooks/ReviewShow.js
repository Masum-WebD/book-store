import React from "react";

const ReviewShow = ({ review }) => {
      console.log(review);
      const {name, comment}= review;
  console.log(name);
  return (
    <div className=" gap-5">
      <h1 className="text-1xl text-bold text-black">Name:{name} </h1>
      <h1>Review: {comment} </h1>
    </div>
  );
};

export default ReviewShow;
