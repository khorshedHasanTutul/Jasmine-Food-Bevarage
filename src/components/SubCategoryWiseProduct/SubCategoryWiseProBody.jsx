import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_SUBCATEGORY_PRODUCTS } from "../../lib/endpoint";
import { http } from "../Services/httpService";
import Suspense from "../Suspense/Suspense";
import SubCatWiseSingleProItem from "./SubCatWiseSingleProItem";

const SubCategoryWiseProBody = ({ detailsAboutChild }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [subProducts, setSubProducts] = useState();

  //   this features implemented later because of lacking api
  const getSubcatProducts = useCallback((id) => {
    http.get({
      url: GET_SUBCATEGORY_PRODUCTS + id,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log(res);
        setSubProducts(res.data);
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    getSubcatProducts(id);
  }, [getSubcatProducts, id]);

  return (
    <>
      {!isLoading && (
        <section class="special-offer-product-area single-product-item-area">
          <div class="container">
            <div class="common-heading common-heading-Oil">
              <h1>{detailsAboutChild.categoryName}</h1>
            </div>
            <div class="hot-offer-product mt-20">
              {subProducts.length === 0 && (
                <div className="no-product-container">
                  <img
                    src="/contents/assets/images/no_productimg.jpg"
                    alt="img"
                    srcset=""
                  />
                  <p>Sorry No Products Found! 😥</p>
                </div>
              )}
              {subProducts.length > 0 && (
                <div class="product-main-flex">
                  <SubCatWiseSingleProItem />
                </div>
              )}
            </div>
            {/* <nav
              class="pagenation-for-web"
              aria-label="Page navigation example"
            >
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href>
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href>
                    2 <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href>
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </section>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default SubCategoryWiseProBody;
