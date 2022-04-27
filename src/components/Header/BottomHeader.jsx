import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import appData from "../DataSource/appData";
import {
  getDropDownMainCategories,
  getMainCategories,
  getObjectFormatofData,
} from "../Services/DataService";
import { urlCategoryRoute, urlSubCategoryRoute } from "../Services/UrlService";
import BottomLinks from "./BottomLinks/BottomLinks";

const BottomHeader = () => {
  const getMainCategoriesData = getMainCategories;
  let history = useHistory();
  const getDropDownCategory = getDropDownMainCategories();
  const getBottomHeaderItems = appData.BottomHeader;
  const ref = useRef(null);

  const openHambargurHandler = () => {
    ref.current.style.left = "0";
  };
  const closeHambyrgerHandler = () => {
    ref.current.style.left = "-100%";
  };
  const goTOCatWiseProduct = (id) => {
    history.push(urlCategoryRoute() + id);
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
              {getMainCategoriesData.map((item, index) => {
                const getObjectForm = getObjectFormatofData(item);
                return (
                  <li>
                    <div
                      class="inner-flex d-flex al-center js-center"
                      onClick={goTOCatWiseProduct.bind(
                        null,
                        getObjectForm.category_id
                      )}
                    >
                      <a href>{getObjectForm.categoryName} </a>
                      <i
                        class="fa fa-angle-right sub-menu-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <ul class="child-dropdown child-dropdown-inner">
                      {getDropDownCategory[index].map((item2) => {
                        const getObject = getObjectFormatofData(item2);
                        return (
                          <li>
                            <Link
                              to={
                                urlSubCategoryRoute() +
                                getObjectForm.category_id +
                                "/" +
                                getObject.category_id
                              }
                            >
                              {getObject.categoryName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>

          <BottomLinks getNavLinksItem={getBottomHeaderItems[0].navLink} />
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
