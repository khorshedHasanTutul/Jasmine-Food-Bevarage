import React from "react";
import { Link } from "react-router-dom";
import appData from "../DataSource/appData";
import { urlProductDetails } from "../Services/UrlService";
import SubCatWiseSingleItem from "./SubCatWiseSingleItem";

const SubCatWiseSingleProItem = ({ categoryParam, subCategoryParam }) => {
  const getSubCategoryProducts = appData.categoryProducts.filter(
    (item) =>
      item.category_id === categoryParam &&
      item.subCategory_id === subCategoryParam
  );

  return (
    <>
      {getSubCategoryProducts.map((item) => (
        <SubCatWiseSingleItem item={item}/>
      ))}
    </>
  );
};

export default SubCatWiseSingleProItem;
