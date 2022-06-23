import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryWiseProBody from "./SubCategoryWiseProBody";
import SubCategoryWiseProHeader from "./SubCategoryWiseProHeader";

const SubCategoryWiseProParent = () => {
  const { id } = useParams();
  const { subid } = useParams();
  return (
    <>
      <SubCategoryWiseProHeader
        categoryParam={parseInt(id)}
        subCategoryParam={parseInt(subid)}
      />
      <SubCategoryWiseProBody
        categoryParam={parseInt(id)}
        subCategoryParam={parseInt(subid)}
      />
    </>
  );
};

export default SubCategoryWiseProParent;
