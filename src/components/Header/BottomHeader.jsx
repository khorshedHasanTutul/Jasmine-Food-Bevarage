import React, { useRef } from "react";
import { Link } from "react-router-dom";
import appData from "../DataSource/appData";
import {
  getDropDownMainCategories,
  getMainCategories,
} from "../Services/DataService";
import { urlCategoryRoute, urlSubCategoryRoute } from "../Services/UrlService";
import BottomLinks from "./BottomLinks/BottomLinks";

const BottomHeader = () => {
  const getMainCategoriesData = getMainCategories;
  const getDropDownCategory = getDropDownMainCategories();
  console.log({ getDropDownCategory });
  const getBottomHeaderItems = appData.BottomHeader;
  const ref = useRef(null);

  const openHambargurHandler = () => {
    ref.current.style.left = "0";
  };
  const closeHambyrgerHandler = () => {
    ref.current.style.left = "-100%";
  };

  return (
    <div class="header-main-menu">
      <button class="mobile-desk openbtn" onClick={openHambargurHandler}>
        &#9776;
      </button>
      <div id="mySidepanel" class="menu sidepanel" ref={ref}>
        <a href class="mobile-desk closebtn" onClick={closeHambyrgerHandler}>
          &times;
        </a>

        <ul class="d-flex al-center">
          <li class="prent-dropdown">
            <div class="inner-flex d-flex al-center js-center">
              <a href>{getBottomHeaderItems[1].dropDownCategoryName}</a>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <ul class="child-dropdown">
              {getMainCategoriesData.map((item, index) => (
                <li>
                  <div class="inner-flex d-flex al-center js-center">
                    <Link to={urlCategoryRoute() + item.categoryId}>
                      {item[1]}{" "}
                    </Link>
                    <i
                      class="fa fa-angle-right sub-menu-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <ul class="child-dropdown child-dropdown-inner">
                      {getDropDownCategory[index].map((item2) => (
                        <li>
                          <Link
                            to={
                              urlSubCategoryRoute() +
                              item.categoryId +
                              "/" +
                              item2.subCategoryId
                            }
                          >
                            {item2[1]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                </li>
              ))}
            </ul>
          </li>

          <BottomLinks getNavLinksItem={getBottomHeaderItems[0].navLink} />
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
