import React from "react";
import Slider from "../../utilities/slider/Slider";
import ProductInfoModel from "../Product/ProductInfoModel";

const CategoryWiseProductBody = ({ childWithProducts }) => {
  const getProductNumber = childWithProducts.filter(
    (item) => item.products.length > 0
  );
  const options = {
    padding: 10,
    type: "loop",
    speed: 1000,
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
  return (
    <section class="product-main-area spices-categories-area">
      <div class="container">
        {getProductNumber.length === 0 && (
          <div className="no-product-container">
            <img
              src="/contents/assets/images/no_productimg.jpg"
              alt="img"
              srcset=""
            />
            <p>Sorry No Products Found! 😥</p>
          </div>
        )}

        {getProductNumber.length > 0 &&
          childWithProducts.map((item) => {
            if (item.products.length > 0) {
              return (
                <div class="repeat-item">
                  <div class="common-heading">
                    <h1>{item.name}</h1>
                  </div>
                  <div class="splide-slider-parent mt-20">
                    <div class="product-main-flex splide__track">
                      {item.products.length > 5 && (
                        <Slider
                          options={options}
                          Template={ProductInfoModel}
                          data={item.products}
                          from={"api"}
                        />
                      )}
                      {item.products.length <= 5 &&
                        item.products.map((data) => (
                          <ProductInfoModel item={data} from={"api"} />
                        ))}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default CategoryWiseProductBody;
