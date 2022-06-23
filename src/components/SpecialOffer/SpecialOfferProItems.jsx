import React from "react";
import appData from "../DataSource/appData";
import ProductInfoModel from "../Product/ProductInfoModel";

const SpecialOfferProItems = () => {
  const getSpecialProduct = appData.demoProducts;

  return (
    <div class="hot-offer-product mt-20">
      <div class="product-main-flex">
        {getSpecialProduct.map((item) => (
          <ProductInfoModel item={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferProItems;
