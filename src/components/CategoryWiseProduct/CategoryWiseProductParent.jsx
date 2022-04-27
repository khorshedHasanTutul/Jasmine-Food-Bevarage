import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GET_SUBCATEGORY_PRODUCTS } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import CategoryWiseProductBody from "./CategoryWiseProductBody";
import CategoryWiseProductHeader from "./CategoryWiseProductHeader";

const CategoryWiseProductParent = () => {
  const { id } = useParams();
  const location = useLocation();
  const [categoriesWithPro, setCategoriesWithPro] = useState([]);

  //api request to get category wise Data
  const getSubCategoryWithPro = () => {
    http.get({
      url: GET_SUBCATEGORY_PRODUCTS + id,
      before: () => {},
      successed: (res) => {
        setCategoriesWithPro(res.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  useEffect(() => {
    getSubCategoryWithPro();
  }, [location]);

  return (
    <>
      <CategoryWiseProductHeader categoryName={"Mosolla"} />
      <CategoryWiseProductBody childWithProducts={categoriesWithPro} />
    </>
  );
};

export default CategoryWiseProductParent;
