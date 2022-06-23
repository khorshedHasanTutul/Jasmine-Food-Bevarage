import React from "react";
import appData from "../DataSource/appData";
import ProductInfoModel from "../Product/ProductInfoModel";

const SubCatWiseSingleProItem = () => {
  const getSubCategoryProducts = appData.demoProducts;

  return (
    <>
      {getSubCategoryProducts.map((item) => (
        <ProductInfoModel item={item} />
      ))}
    </>
  );
};

export default SubCatWiseSingleProItem;
