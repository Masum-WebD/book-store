import React from "react";
import { Link } from "react-router-dom";
import discountBanner3 from "../../asset/Images/discountBanner3.png";

const TinyFiftyPercent = () => {
  return (
    <div class="lg:mt-[72px] mt-[66px]">
      <Link to="/all-products">
        <img src={discountBanner3} className="h-[50px] w-[1350px]" alt="" srcset="" />
      </Link>
    </div>
  );
};

export default TinyFiftyPercent;
