import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import { urlCheckoutRoute, urlProductDetails } from "../Services/UrlService";
import authContext from "../Store/auth-context";
import cartContext from "../Store/cart-context";

const ContentCart = ({
  openCart,
  setAlert,
  setQtyAlert,
  closeAuthModalHandler,
  setIsOrderNowPressed,
}) => {
  const authCtx = useContext(authContext);
  const getCartContext = useContext(cartContext);
  const [qty, setQty] = useState("");
  const getCartContextModel = getCartContext.getCartModel;

  const clearCartHandler = () => {
    getCartContext.clearCart();
    openCart();
  };

  const orderNowHandler = (e) => {
    if (getCartContextModel.Items.length === 0) {
      e.preventDefault();
      setAlert();
      openCart();
      return false;
    }
    if (authCtx.isLoggedIn === false) {
      e.preventDefault();
      closeAuthModalHandler();
      openCart();
      setIsOrderNowPressed(true);
      return false;
    }

    openCart();
  };

  const cartItemRemoverHandler = (item) => {
    getCartContext.singleItemRemover(item);
  };

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const qtyChangeHandler = (item, { target }) => {
    if (target.value === "") {
      setQty(0);
    } else {
      setQty(target.value);
    }
    getCartContext.updateEditableQuantity(item, target.value);
  };

  const blurHandler = (item) => {
    if (qty === 0) {
      setQtyAlert(true);
      getCartContext.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  return (
    <>
      <div class="cart-box-view">
        <div class="cart-box-inner-view">
          <div class="cart-header no_margin card-header-flex-for-sale">
            <div class="card-select-item">
              <img src="/contents/assets/images/add-cart.png" alt="img" />
              <strong class="car-box-title SearchFont">
                <span>{getCartContextModel.TotalItems}</span>
                <span>Item</span>
              </strong>
            </div>
            <div class="card-select-cross view-pop" onClick={openCart}>
              <img src="/contents/assets/images/x-button.png" alt="img" />
            </div>
          </div>
          <div class="cart-body text-center">
            <div class="cart-table-wrap">
              <span class="happy-shopping">Happy Shopping!! </span>
              <table class="cart-table">
                <tbody>
                  {getCartContextModel.Items.map((item) => (
                    <tr class="close">
                      <td className="mimicart-img">
                        <img src={item.image} alt="img" />
                      </td>
                      <td class="card-title-heading">
                        <Link to={urlProductDetails() + item.Id}>
                          <span class="SearchProductName SearchFont">
                            {item.Nm}
                          </span>
                        </Link>
                        <br />
                        {item.Ds === 0 && (
                          <strong class="SearchPrice SearchDelPriceDel2">
                            ৳{item.MRP}
                          </strong>
                        )}
                        {item.Ds > 0 && (
                          <Fragment>
                            <del class="SearchDelPrice SearchDelPriceDel1">
                              ৳{item.MRP}
                            </del>
                            <strong class="SearchPrice SearchDelPriceDel2">
                              ৳
                              {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(
                                2
                              )}
                            </strong>
                          </Fragment>
                        )}
                      </td>
                      <td class="card-plus-minuse">
                        <div class="attributes input-group bootstrap-touchspin">
                          <div class="qty-holder">
                            <a
                              onClick={qtyDecHandler.bind(this, item)}
                              href
                              class="qty-dec-btn"
                              title="Dec"
                            >
                              -
                            </a>
                            <input
                              type="text"
                              name="product_qty"
                              id="product_qty"
                              class="qty-input"
                              value={item.quantity}
                              onChange={qtyChangeHandler.bind(null, item)}
                              onBlur={blurHandler.bind(null, item)}
                            />
                            <a
                              onClick={qtyIncHandler.bind(this, item)}
                              href
                              class="qty-inc-btn"
                              title="Inc"
                            >
                              +
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="amount-for-popup">
                        <span class="SearchFont SearchDelPrice">
                          <aside>৳ </aside>
                          {item.Ds === 0 && (
                            <span class="SearchFont SearchPrice">
                              {(item.MRP * item.quantity).toFixed(2)}
                            </span>
                          )}
                          {item.Ds > 0 && (
                            <Fragment>
                              <del class="add-postion">
                                {(item.MRP * item.quantity).toFixed(2)}
                              </del>
                              <br />
                              <span class="SearchFont SearchPrice">
                                {(
                                  (item.MRP - (item.MRP * item.Ds) / 100) *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </td>
                      <td
                        class="amount-inner-crose"
                        onClick={cartItemRemoverHandler.bind(null, item)}
                      >
                        <a href>
                          <i class="fa fa-times text-danger"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="product_items__count__container">
            <div className="cmn-class-items-calc total__items">
              <p>Total Items</p>
              <span>{getCartContextModel.TotalItems}</span>
            </div>
            <div className="cmn-class-items-calc total__ammount">
              <p>Total Ammount</p>
              <span>{getCartContextModel.TotalAmmount.toFixed(2)}tk</span>
            </div>
          </div>
          <div class="cart-footer">
            {/* <div class="card-footer-inner">
              <Link to={urlCheckoutRoute()}>
                <button class="cart-cmn-btn" onClick={orderNowHandler}>
                  Order Now
                </button>
              </Link>

              <span class="cart-cmn-btn cart-cmn-btn2">
                ৳ <span>{getCartContextModel.TotalAmmount.toFixed(2)}</span>
              </span>
            </div>

            <a href class="block-btn-card" onClick={clearCartHandler}>
              <button class="cart-cmn-btn">Clear Cart</button>
            </a> */}

            <div className="cart-footer__orderNow" onClick={orderNowHandler}>
              <Link to={urlCheckoutRoute()}>
                <p>
                  <span >Order Now</span>
                </p>
              </Link>
            </div>
            <div className="cart-footer__orderNow" style={{background:"#4FA961"}} onClick={clearCartHandler}>
              <p >Clear Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCart;
