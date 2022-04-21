import React, { useState } from "react";
import ContentCart from "./ContentCart";
import MiniCart from "./MiniCart";
import PopAlert from "../../utilities/alert/PopAlert";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";

const ShoppingCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [alert, setAlert] = useState(false);
  const [qtyAlert, setQtyAlert] = useState(false);
  const [isVisibleLoginMOdal, setIsVisibleLoginModal] = useState(false);
  const [isOrderNowPressed, setIsOrderNowPressed] = useState(false);

  const alertStatusChangeHandler = () => {
    setAlert((prevState) => !prevState);
  };
  const qtyAlertStatusChangeHandler = () => {
    setQtyAlert((prevState) => !prevState);
  };
  const toggleCartHandler = () => {
    setIsOpenCart((prevState) => !prevState);
  };
  const closeAuthModalHandler = () => {
    setIsVisibleLoginModal((prevState) => !prevState);
  };

  return (
    <>
      <div class="cart_box_container cart_info">
        {isOpenCart && (
          <ContentCart
            openCart={toggleCartHandler}
            setAlert={alertStatusChangeHandler}
            setQtyAlert={setQtyAlert}
            closeAuthModalHandler={closeAuthModalHandler}
            setIsOrderNowPressed={setIsOrderNowPressed}
          />
        )}
        {!isOpenCart && <MiniCart closeCart={toggleCartHandler} />}
      </div>
      {alert && (
        <PopAlert
          closeModal={alertStatusChangeHandler}
          content={"Please select at least one product!"}
        />
      )}
      {qtyAlert && (
        <PopAlert
          closeModal={qtyAlertStatusChangeHandler}
          content={"Quantity can't be less than 1!"}
        />
      )}
      {isVisibleLoginMOdal && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeAuthModalHandler}
          isOrderNowPressed={isOrderNowPressed}
        />
      )}
    </>
  );
};

export default ShoppingCart;
