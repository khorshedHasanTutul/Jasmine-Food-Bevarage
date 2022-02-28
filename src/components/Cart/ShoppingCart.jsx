import React, { useState } from "react";
import ContentCart from "./ContentCart";
import MiniCart from "./MiniCart";
import PopAlert from "../../utilities/alert/PopAlert";

const ShoppingCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [alert, setAlert] = useState(false);

  const alertStatusChangeHandler = () => {
    setAlert((prevState) => !prevState);
  };
  const toggleCartHandler=()=>{
    setIsOpenCart(prevState => !prevState);
  }
  return (
    <>
    <div class="cart_box_container cart_info">
        {
            isOpenCart && <ContentCart openCart={toggleCartHandler} setAlert={alertStatusChangeHandler}/>
        }
        {
            !isOpenCart && <MiniCart closeCart={toggleCartHandler}/>
        }
    </div>
    {alert && (
        <PopAlert
          closeModal={alertStatusChangeHandler}
          content={"Please select at least one product!"}
        />
      )}
    </>
    
  );
};

export default ShoppingCart;
