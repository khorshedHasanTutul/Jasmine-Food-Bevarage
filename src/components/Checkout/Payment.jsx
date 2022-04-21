import React, { Fragment, useContext, useState } from "react";
import PopAlert from "../../utilities/alert/PopAlert";
import { storeAddressObj } from "../Services/AddressService";
import addressContext from "../Store/address-context";
import cartContext from "../Store/cart-context";
import OrderAlert from "./OrderAlert/OrderAlert";

const Payment = () => {
  const ctxAddress = useContext(addressContext);
  const ctxCart = useContext(cartContext);
  const [clickedRadio, setClickedRadio] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertPayment, setAlertPayment] = useState(false);
  const getStoreCartCtx = ctxCart.getCartModel;
  const getActiveAddressType = ctxAddress.getActiveType;
  const getSelectedAddress = ctxAddress.getStoreAddressCtx.find(
    (item) => item.type === getActiveAddressType
  );

  const radioButtonHandler = () => {
    setClickedRadio(true);
  };
  const alertStateChangedHandler = () => {
    setAlert((prevState) => !prevState);
  };
  const alertPaymentRadioStateChangeHandler = () => {
    setAlertPayment((prevState) => !prevState);
  };
  const proceedOrderHandler = () => {
    if (clickedRadio) {
      alertStateChangedHandler();
      ctxCart.clearCart();
    } else {
      alertPaymentRadioStateChangeHandler();
    }
  };

  return (
    <div id="Tab5" class="tabcontent tab-content checkout-main-tab-content">
      <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
          <input
            type="text"
            id="discount_code"
            placeholder="Discount Code..."
          />
          <button type="submit">Apply</button>
        </form>
      </div>
      {(getSelectedAddress || storeAddressObj.name.length !== 0) && (
        <Fragment>
          <h3 class="sip-add">Shipping Address</h3>
          <div class="shaping-address-saveing-row">
            <div class="shapping-address-inner-content">
              <div class="location-ad-icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="saving-address-content">
                <small>
                  {getSelectedAddress
                    ? getSelectedAddress.name
                    : storeAddressObj.name}
                </small>
                <small>
                  {getSelectedAddress
                    ? getSelectedAddress.mobile
                    : storeAddressObj.mobile}
                </small>
                <span>
                  <aside>
                    {getSelectedAddress
                      ? getSelectedAddress.type
                      : storeAddressObj.type}
                  </aside>
                </span>
                <span>
                  {getSelectedAddress
                    ? getSelectedAddress.email
                    : storeAddressObj.email}
                </span>
                &nbsp;
                <span>
                  {getSelectedAddress &&
                    getSelectedAddress.division.name +
                      "-" +
                      getSelectedAddress.district.name +
                      "-" +
                      getSelectedAddress.area.name +
                      "-" +
                      getSelectedAddress.address}
                </span>
                <span>
                  {!getSelectedAddress &&
                    storeAddressObj.division.name +
                      "-" +
                      storeAddressObj.district.name +
                      "-" +
                      storeAddressObj.area.name +
                      "-" +
                      storeAddressObj.address}
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      <div class="product-payment-block-tab">
        <div class="payment-summary-table">
          <table class="table table-bordered table-responsive cart_summary">
            <tbody>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Amount
                </td>
                <td class="summary-details-p" colspan="2">
                  {getStoreCartCtx.TotalAmmount.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  0
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Cupon Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  0
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Delivery Charge
                </td>
                <td class="summary-details-p" colspan="2">
                  80
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  <strong>Total Amount </strong>
                </td>
                <td class="summary-details-p" colspan="2">
                  <strong>
                    {(getStoreCartCtx.TotalAmmount + 80).toFixed(2)}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="summary-notice-address">
          <p class="OrderNotice" style={{ marginTop: "1%" }}>
            *** Please pay first for outside Dhaka delivery
          </p>
          <p class="OrderNotice">
            *** Please pay the delivery charge first for inside Dhaka delivery
            (Cash on Delivery)
          </p>
          <p class="OrderNotice">
            *** Jasmin agent will call you for delivery charge and reconfirm
            your order
          </p>
        </div>

        <div class="row-custom">
          <div class="order-inside-outside-main">
            <form>
              <div class="order-outside-inside-flex">
                <p onClick={radioButtonHandler}>
                  <input type="radio" id="test3" name="radio-group" />
                  <label for="test3">Cash on Delivery</label>
                </p>
                <p onClick={radioButtonHandler}>
                  <input type="radio" id="test4" name="radio-group" />
                  <label for="test4">Onlie Payments</label>
                </p>
              </div>
            </form>
          </div>
          <div class="cart_navigation">
            <a class="prev-btn" href="/">
              <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
              Continue shopping
            </a>
            <a href class="next-btn" onClick={proceedOrderHandler}>
              {" "}
              Order Now{" "}
              <i
                class="fa fa-angle-right check-ang-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
      {alert && (
        <PopAlert Template={OrderAlert} closeModal={alertStateChangedHandler} />
      )}
      {alertPayment && (
        <PopAlert
          closeModal={alertPaymentRadioStateChangeHandler}
          content={"Please select a payment method!"}
        />
      )}
    </div>
  );
};

export default Payment;
