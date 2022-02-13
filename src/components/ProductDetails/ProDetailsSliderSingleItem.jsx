import React from "react";
import { Link } from "react-router-dom";

const ProDetailsSliderSingleItem = ({item,imageChangedHandler}) => {

  return (
    <Link to="#" onClick={imageChangedHandler.bind(null,item.image)}>
      <img src={item.image} alt="sp1.jpg" />
    </Link>
  );
};

export default ProDetailsSliderSingleItem;
