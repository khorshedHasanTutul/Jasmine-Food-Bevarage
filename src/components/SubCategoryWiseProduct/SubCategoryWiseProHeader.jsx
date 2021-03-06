import React from "react";
import { Link } from "react-router-dom";
import {
  getDropDownMainCategories,
  getObjectFormatofData,
} from "../Services/DataService";
import { UrlHomeRoute } from "../Services/UrlService";

const SubCategoryWiseProHeader = ({ detailsAboutChild }) => {

  return (
    <section class="breadcrumb-main-area">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to={UrlHomeRoute()}>Home</Link>
            </li>
            {/* <li class="breadcrumb-item">
              <Link to={urlCategoryRoute() + "/hello"}>Radhuni</Link>
            </li> */}
            <li class="breadcrumb-item active" aria-current="page">
              {detailsAboutChild.categoryName}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SubCategoryWiseProHeader;
