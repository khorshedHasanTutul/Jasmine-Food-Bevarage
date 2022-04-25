import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { POST_ORDER, POST_ORDER_PAYMENT } from "../../lib/endpoint";
import PopAlert from "../../utilities/alert/PopAlert";
import { storeAddressObj } from "../Services/AddressService";
import { http } from "../Services/httpService";
import addressContext from "../Store/address-context";
import cartContext from "../Store/cart-context";
import OrderAlert from "./OrderAlert/OrderAlert";

const Payment = ({ addresses, AddressActiveHandler }) => {
  let history = useHistory();
  const ctxAddress = useContext(addressContext);
  const ctxCart = useContext(cartContext);
  const getCtxCartItems = ctxCart.getCartModel;
  const [clickedRadio, setClickedRadio] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertPayment, setAlertPayment] = useState(false);
  const getStoreCartCtx = ctxCart.getCartModel;
  const getActiveAddressType = ctxAddress.getActiveType;
  const [paymentData, setPaymentData] = useState();
  const [cupon, setCupon] = useState("");
  const [isInvalidCupon, setIsInvalidCupon] = useState(false);
  const getSelectedAddress = addresses.find(
    (item) => item.typeOfAddress === getActiveAddressType.id
  );
  const products = [];
  getCtxCartItems.Items.map((item) =>
    products.push({ id: item.Id, quantity: item.quantity })
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
  const cuponSubmitHandler = (evt) => {
    evt.preventDefault();
    postOrderHttp();
  };
  const cuponChangeHandler = ({ target }) => {
    setCupon(target.value);
  };
  const proceedOrderHandler = () => {
    if (clickedRadio) {
      alertStateChangedHandler();
      http.post({
        url: POST_ORDER,
        payload: {
          addressId: getSelectedAddress.id,
          couponCode: cupon,
          products: products,
          payment: {
            orderValue: paymentData.orderValue,
            productAmount: paymentData.productAmount,
            productDiscount: paymentData.productDiscount,
            coupon: paymentData.coupon,
            cashback: paymentData.cashback,
            shippingCharge: paymentData.shippingCharge,
            originalShippingCharge: paymentData.originalShippingCharge,
            payableAmount: paymentData.payableAmount,
          },
          activityId: "00000000-0000-0000-0000-000000000000",
          remarks: "",
        },
        before: () => {},
        successed: (res) => {
          console.log(res.data);
        },
        failed: () => {},
        always: () => {},
      });
      ctxCart.clearCart();
    } else {
      alertPaymentRadioStateChangeHandler();
    }
  };

  const postOrderHttp = () => {
    http.post({
      url: POST_ORDER_PAYMENT,
      payload: {
        addressId: getSelectedAddress.id,
        products: products,
        couponCode: cupon,
      },
      before: () => {},
      successed: (res) => {
        console.log(res.data);
        setPaymentData(res.data);
        if (
          res.data.coupon.isLegit === false &&
          res.data.coupon.code !== null
        ) {
          setIsInvalidCupon(true);
        } else {
          setIsInvalidCupon(false);
        }
      },
      failed: () => {},
      always: () => {},
    });
  };

  console.log({paymentData})
  useEffect(() => {
    postOrderHttp();
  }, []);

  // useEffect(() => {
  //   if (getCtxCartItems.Items.length === 0) {
  //     history.push("/");
  //   }
  // }, [getCtxCartItems.Items.length, history]);

  return (
    <div id="Tab5" class="tabcontent tab-content checkout-main-tab-content">
      <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
          <input
            type="text"
            id="discount_code"
            placeholder="Discount Code..."
            onChange={cuponChangeHandler}
          />

          <button type="submit" onClick={cuponSubmitHandler}>
            Apply
          </button>
        </form>
        {isInvalidCupon && <div class="alert alert-error">Invalid Cupon.</div>}
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
                    ? getSelectedAddress.phone
                    : storeAddressObj.mobile}
                </small>
                <span>
                  <aside>
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 0 &&
                      "Home"}
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 1 &&
                      "Office"}
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 2 &&
                      "Home Town"}
                    {!getSelectedAddress && storeAddressObj.type}
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
                    getSelectedAddress.province.name +
                      "-" +
                      getSelectedAddress.district.name +
                      "-" +
                      getSelectedAddress.upazila.name +
                      "-" +
                      getSelectedAddress.remarks}
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
            <div class="saving-ad-btn" onClick={AddressActiveHandler}>
              <button>Change</button>
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
                  Ammount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.orderValue.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Product Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.productDiscount}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Cupon Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.discount}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Delivery Charge
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.shippingCharge}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  <strong>Total Amount </strong>
                </td>
                <td class="summary-details-p" colspan="2">
                  <strong>{paymentData?.payableAmount.toFixed(2)}</strong>
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
