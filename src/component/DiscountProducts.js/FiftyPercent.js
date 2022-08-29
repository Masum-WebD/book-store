import React from "react";
import { Link } from "react-router-dom";
import discountBanner2 from "../../asset/Images/discountBanner2.jpg";

const FiftyPercent = () => {
  return (
    <div class="container mx-auto my-8">
      <Link to="/all-products">
        <img src={discountBanner2} alt="" srcset="" />
      </Link>
    </div>
  );
};

export default FiftyPercent;
