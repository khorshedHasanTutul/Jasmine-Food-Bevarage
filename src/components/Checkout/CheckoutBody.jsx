import React, { useContext, useEffect, useRef, useState } from "react";
import { GET_ADDRESS, POST_ORDER_PAYMENT } from "../../lib/endpoint";
import PopAlert from "../../utilities/alert/PopAlert";
import { storeAddressObj } from "../Services/AddressService";
import { http } from "../Services/httpService";
import addressContext from "../Store/address-context";
import cartContext from "../Store/cart-context";
import Suspense from "../Suspense/Suspense";
import Address from "./Address";
import Payment from "./Payment";
import ProductSummary from "./ProductSummary";

const CheckoutBody = () => {
  //cart context
  const ctxCart = useContext(cartContext);
  //address context
  const ctxAddress = useContext(addressContext);
  //store addresses from database state
  const [addresses, setAddresses] = useState([]);
  //loading
  const [isLoading, setIsLoading] = useState(true);
  //alert
  const [alert, setAlert] = useState(false);
  const [qtyAlert, setQtyAlert] = useState(false);
  //find active type address from context
  const getActiveTypeAddress = ctxAddress.getActiveType;
  //find active address
  const findActiveAddress = addresses?.find(
    (item) => item.typeOfAddress === getActiveTypeAddress.id
  );

  const ProSummaryRef = useRef(null);
  const [isActiveProductSummary, setActiveProductSummary] = useState(true);
  const [isActiveAddress, setActiveAddress] = useState(false);
  const [isActivePayment, setActivePayment] = useState(false);

  const SummaryActiveHandler = () => {
    setActiveProductSummary(true);
    setActiveAddress(false);
    setActivePayment(false);
    getAddressHttp();
  };

  const AddressActiveHandler = () => {
    setActiveProductSummary(false);
    setActiveAddress(true);
    setActivePayment(false);
  };

  const paymentActiveHandler = () => {
    if (okToProceed()) {
      setActiveProductSummary(false);
      setActiveAddress(false);
      setActivePayment(true);
      getAddressHttp();
    } else {
      setAlert(true);
      //   alert("Please Enter Valid Address!");
    }
  };

  //check whether to go to payment model or not
  const okToProceed = () => {
    if (
      (findActiveAddress !== undefined && findActiveAddress?.name !== null) ||
      (storeAddressObj.name.length > 0 &&
        storeAddressObj.mobile.length > 0 &&
        storeAddressObj.division.length > 0 &&
        storeAddressObj.district.length > 0 &&
        storeAddressObj.area.length > 0 &&
        storeAddressObj.address.length > 0)
    )
      return true;
    else return false;
  };

  const proceedToAddressHandler = () => {
    if (findActiveAddress !== undefined) {
      paymentActiveHandler();
    } else AddressActiveHandler();
  };

  const ProceedToOrderHandler = () => {
    if (okToProceed()) {
      paymentActiveHandler();
    } else {
      setAlert(true);
      //   alert("Please Enter Valid Address!");
    }
  };

  const alertStatusChangeHandler = () => {
    setAlert((prevState) => !prevState);
  };

  const qtyAlertStatusChangeHandler = () => {
    setQtyAlert((prevState) => !prevState);
  };

  //api request for get store addresses
  const getAddressHttp = () => {
    http.get({
      url: GET_ADDRESS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setAddresses(res.data);
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getAddressHttp();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isActiveProductSummary) {
        ProSummaryRef.current.classList.add("active");
      } else {
        ProSummaryRef.current.classList.remove("active");
      }
      if (isActiveAddress) {
        ProSummaryRef.current.nextElementSibling.classList.add("active");
      } else {
        ProSummaryRef.current.nextElementSibling.classList.remove("active");
      }
      if (isActivePayment) {
        ProSummaryRef.current.parentNode.childNodes[2].classList.add("active");
      } else {
        ProSummaryRef.current.parentNode.childNodes[2].classList.remove(
          "active"
        );
      }
    }
  }, [isActiveProductSummary, isActiveAddress, isActivePayment, isLoading]);

  return (
    <section class="checkout-main-area">
      {!isLoading && (
        <div class="container">
          <div class="checkout-main-tab-area">
            <div class="checkout-main-tab-information-main">
              <div id="niiceeTab" class="page-content">
                <nav class="niiceeTabBtn">
                  <button
                    id="defaultOpen"
                    class="tablinks"
                    ref={ProSummaryRef}
                    onClick={SummaryActiveHandler}
                  >
                    01. Summary
                  </button>
                  <button class="tablinks" onClick={AddressActiveHandler}>
                    02. Address
                  </button>
                  <button class="tablinks" onClick={paymentActiveHandler}>
                    03. Payment
                  </button>
                </nav>
                <div class="tabbed niiceeTabContent">
                  <span class="card-shiping-item">
                    {" "}
                    Your shopping cart contains:
                    <small>{ctxCart.getCartModel.Items.length} Product</small>
                  </span>
                  {isActiveProductSummary && (
                    <ProductSummary
                      AddressActiveHandler={AddressActiveHandler}
                      proceedToAddressHandler={proceedToAddressHandler}
                      setQtyAlert={setQtyAlert}
                      addresses={addresses}
                    />
                  )}
                  {isActiveAddress && (
                    <Address ProceedToOrderHandler={ProceedToOrderHandler} />
                  )}
                  {isActivePayment && (
                    <Payment
                      addresses={addresses}
                      AddressActiveHandler={AddressActiveHandler}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {alert && (
        <PopAlert
          closeModal={alertStatusChangeHandler}
          content={"Please Enter Valid Address!"}
        />
      )}
      {qtyAlert && (
        <PopAlert
          closeModal={qtyAlertStatusChangeHandler}
          content={"Quantity can't be less than 1!"}
        />
      )}
      {isLoading && <Suspense />}
    </section>
  );
};

export default CheckoutBody;
