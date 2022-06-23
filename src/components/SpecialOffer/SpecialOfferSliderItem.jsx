import React from "react";
import { Link } from "react-router-dom";

const SpecialOfferSliderItem = ({ item }) => {
  return (
    <div className="slide">
      <Link to="#">
        <img src={item.image} alt="sph1.jpg" />
      </Link>
    </div>
  );
};

export default SpecialOfferSliderItem;
