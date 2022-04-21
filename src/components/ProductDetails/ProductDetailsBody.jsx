import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../../utilities/slider/Slider";
import appData from "../DataSource/appData";
import cartContext from "../Store/cart-context";
import ProDetailsSliderSingleItem from "./ProDetailsSliderSingleItem";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import RelatedProducts from "./RelatedProducts";
import ReactImageZoom from "react-image-zoom";

const ProductDetailsBody = () => {
  const { id } = useParams();
  const ref = useRef(null);
  const getCartContext = useContext(cartContext);
  const [visibleCartBox, setVisibleCartBox] = useState(false);
  const getCartCtxItems = getCartContext.getCartModel.Items;
  const [isActive, setisActive] = useState(false);
  const getDataById = appData.categoryProducts.find((item) => item.Id === id);
  const findItem = getCartCtxItems.find((item2) => item2.Id === getDataById.Id);
  const getCategory = appData.BottomHeader[1].dropDownCategoryItem.find(
    (item) => item.categoryId === getDataById.category_id
  );
  const [productImage, setProductImage] = useState(getDataById.image);
  const props = {
    width: 345,
    height: 420,
    img: productImage,
    zoomPosition: "original",
  };
  const [isPreview, setIsPreview] = useState(false);

  const toggleHandler = () => {
    setisActive((prevState) => !prevState);
  };
  const imageChangedHandler = (image) => {
    setProductImage(image);
  };
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

  const imgZoomHandler = () => {
    setIsPreview(true);
  };
  useEffect(() => {
    if (!isActive) {
      ref.current.classList.add("active");
      ref.current.nextElementSibling.classList.remove("active");
    } else {
      ref.current.classList.remove("active");
      ref.current.nextElementSibling.classList.add("active");
    }
  }, [isActive]);

  useEffect(() => {
    if (findItem) {
      setVisibleCartBox(true);
    } else {
      setVisibleCartBox(false);
    }
  }, [findItem]);

  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: false,
    perPage: 4,
    width: "100%",
  };
  const data = appData.categoryProducts.filter(
    (item) => item.category_id === getDataById.category_id
  );

  return (
    <section class="product-details-area">
      <div class="container">
        <div class="product-details-main">
          <div class="product-details-inner-flex">
            <div class="product-details-left">
              <div class="inner-product-details-flex">
                <div class="product-d-left-img">
                  <div class="det-img-padding" onMouseEnter={imgZoomHandler}>
                    <img src={productImage} alt="img" />
                    {/* <div class="product-dec-overlay"> 
                     <img src={productImage} alt="img" /> */}
                    {isPreview && <ReactImageZoom {...props} />}
                    {/* </div>  */}
                  </div>
                  <div class="product-gallery-hover">
                    <div class="splide product-gallery-splide">
                      <div class="splide__track">
                        <Slider
                          Template={ProDetailsSliderSingleItem}
                          options={options}
                          data={data}
                          imageChangedHandler={imageChangedHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-desc-right-content">
                  <div class="catagory-overly-main-bg">
                    <div class="catagory-product-overly">
                      <h4>{getDataById.Nm}</h4>
                      <p>{getDataById.productInfo}</p>
                    </div>
                    <div class="avablle-in-product">
                      <h3>Available In</h3>
                      <span>{getDataById.St}</span>
                    </div>
                    {/* <!-- <div class="product-review-main">
                                    <a href="#">No Review</a>
                                </div> --> */}
                    <div class="basket-add">
                      <span class="item__price item__price--now">
                        ৳{getDataById.MRP}
                      </span>
                      <span class="price product-price">
                        <del class="cross_price">৳{getDataById.MRP}</del>
                      </span>
                    </div>
                    <div class="pd-brand-ctg">
                      <ul>
                        <li>
                          Category :
                          <Link to={""}>{getCategory.categoryName}</Link>
                        </li>
                        <li>
                          Brand :<a href="#"> Radhuni</a>
                        </li>
                      </ul>
                    </div>

                    <div class="pro-add-wish-flex">
                      {!visibleCartBox && (
                        <div
                          class="add-to-cart d-flex al-center j-center"
                          onClick={storeCartHandler.bind(this, getDataById)}
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
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-desc-review-information-main">
                <div id="niiceeTab" class="page-content">
                  <nav class="niiceeTabBtn">
                    <button
                      id="defaultOpen"
                      ref={ref}
                      class="tablinks"
                      onClick={toggleHandler}
                    >
                      Product Details
                    </button>
                    <button class="tablinks" onClick={toggleHandler}>
                      review
                    </button>
                  </nav>

                  <div class="tabbed niiceeTabContent">
                    {!isActive && <ProductDescription />}
                    {isActive && <ProductReview />}
                  </div>
                </div>
              </div>
            </div>
            <RelatedProducts
              productItem={getDataById}
              imageChangedHandler={imageChangedHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsBody;
