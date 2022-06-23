import React from "react";
import { useParams } from "react-router-dom";
import {
  getDropDownMainCategories,
  getObjectFormatofData,
} from "../Services/DataService";
import SubCategoryWiseProBody from "./SubCategoryWiseProBody";
import SubCategoryWiseProHeader from "./SubCategoryWiseProHeader";

const SubCategoryWiseProParent = () => {
  const { id } = useParams();
  const detailsAboutChild = getObjectFormatofData(
    getDropDownMainCategories()
      .map((item) => item.find((x) => x[0] === id))
      .find((item) => item[0] === id)
  );
  
  return (
    <>
      <SubCategoryWiseProHeader detailsAboutChild={detailsAboutChild} />
      <SubCategoryWiseProBody detailsAboutChild={detailsAboutChild} />
    </>
  );
};

export default SubCategoryWiseProParent;
