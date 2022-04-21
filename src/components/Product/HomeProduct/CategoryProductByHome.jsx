import React from "react";
import Slider from "../../../utilities/slider/Slider";
import appData from "../../DataSource/appData";
import SingleItemProduct from "./SingleItemProduct";

const CategoryProductByHome = () => {
  const options = {
    rewind: true,
    type: "loop",
    drag: "free",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
    perPage: 5,
    width: "100%",
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 4,
      },
      1024: {
        perPage: 4,
      },
      1200: {
        perPage: 5,
      },
    },
    autoScroll: {
      speed: 1,
    },
  };
  const getCategory = appData.BottomHeader;
  const findOnlyVisibleProduct = getCategory[1].dropDownCategoryItem.filter(
    (item) => item.visible === true
  );
  return (
    <section class="product-main-area">
      <div class="container">
        {findOnlyVisibleProduct.map((item) => {
          const getProduct = appData.categoryProducts.filter(
            (item2) => item2.category_id === item.categoryId
          );
          return (
            <>
              <div class="common-heading">
                <h1>{item.categoryName}</h1>
              </div>
              <div class="spices-auto-scroll mt-20">
                <div class="slide-track splide__track product-main-flex">
                  <ul class="splide__list">
                    <Slider
                      options={options}
                      Template={SingleItemProduct}
                      data={getProduct}
                    />
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryProductByHome;
