import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { returnDataAsObjectProperties } from "../../Services/DataService";
import { urlProductDetails } from "../../Services/UrlService";
import cartContext from "../../Store/cart-context";

const SingleItemProduct = ({ item }) => {
  const getReturnObjectData = returnDataAsObjectProperties(item);
  console.log({getReturnObjectData})
  const getCartContext = useContext(cartContext);
  const [visibleCartBox, setVisibleCartBox] = useState(false);
  const getCartCtxItems = getCartContext.getCartModel.Items;
  const findItem = getCartCtxItems.find(
    (item2) => item2.Id === getReturnObjectData.Id
  );

  const storeCartHandler = (item, e) => {
    e.preventDefault();
    getCartContext.storeCartItems(item);
  };

  const qtyIncHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const qtyDecHandler = (e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    getCartContext.updateQuantity(findItem, quantity);
    if (findItem.quantity === 0) {
      setVisibleCartBox(false);
    }
  };

  useEffect(() => {
    if (findItem) {
      setVisibleCartBox(true);
    } else {
      setVisibleCartBox(false);
    }
  }, [findItem]);

  return (
    <div class="inner-product-main-flex slide-single splide__slide">
      <Link to={urlProductDetails() + getReturnObjectData.Id}>
        {getReturnObjectData.Ds > 0 && (
          <div class="group-price-drag">
            <span class="product-new-drag">
              {getReturnObjectData.Ds > 0 ? getReturnObjectData.Ds : ""}
              {getReturnObjectData.Ds > 0 ? "%" : null}
            </span>
          </div>
        )}

        <div class="product-top-area">
          <div class="product-img">
            <img src="/contents/assets/images/product/p4.jpg" alt="product" />
          </div>
          <div class="product-content">
            <h3>{getReturnObjectData.Nm}</h3>
            <span>{getReturnObjectData.St}</span>
            <div class="basket-add">
              {getReturnObjectData.Ds === 0 && (
                <span class="item__price item__price--now">
                  ৳{getReturnObjectData.MRP}
                </span>
              )}

              {getReturnObjectData.Ds > 0 && (
                <>
                  <span class="item__price item__price--now">
                    ৳
                    {(
                      getReturnObjectData.MRP -
                      (getReturnObjectData.MRP * getReturnObjectData.Ds) / 100
                    ).toFixed(2)}
                  </span>
                  <span class="price product-price">
                    <del class="cross_price"> ৳{getReturnObjectData.MRP}</del>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        {!visibleCartBox && (
          <div
            class="add-to-cart d-flex al-center j-center"
            onClick={storeCartHandler.bind(this, getReturnObjectData)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            <span>Add to Cart</span>
          </div>
        )}
        {visibleCartBox && (
          <div class="wishlist-btn">
            <div class="add-tocart-overlay">
              <div class="inner-card-flex">
                <div class="qty-holder2">
                  <span
                    onClick={qtyDecHandler}
                    class="qty-dec-btn2"
                    title="Dec"
                  >
                    -
                  </span>
                  <aside>{findItem?.quantity} Item Add</aside>
                  <span
                    onClick={qtyIncHandler}
                    class="qty-inc-btn2"
                    title="Inc"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default SingleItemProduct;
