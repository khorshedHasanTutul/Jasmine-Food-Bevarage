import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GET_SUBCATEGORY_PRODUCTS } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import Suspense from "../Suspense/Suspense";
import CategoryWiseProductBody from "./CategoryWiseProductBody";
import CategoryWiseProductHeader from "./CategoryWiseProductHeader";

const CategoryWiseProductParent = () => {
  const { id } = useParams();
  const location = useLocation();
  const [categoriesWithPro, setCategoriesWithPro] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //api request to get category wise Data
  const getSubCategoryWithPro = () => {
    http.get({
      url: GET_SUBCATEGORY_PRODUCTS + id,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setCategoriesWithPro(res.data);
        setIsLoading(false);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  useEffect(() => {
    getSubCategoryWithPro();
  }, [location]);

  return (
    <>
      {!isLoading && (
        <>
          <CategoryWiseProductHeader categoryName={"Mosolla"} />
          <CategoryWiseProductBody childWithProducts={categoriesWithPro} />
        </>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default CategoryWiseProductParent;
