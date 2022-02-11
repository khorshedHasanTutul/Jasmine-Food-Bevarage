import React, { useState } from "react";
import ContentCart from "./ContentCart";
import MiniCart from "./MiniCart";

const ShoppingCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const toggleCartHandler=()=>{
    setIsOpenCart(prevState => !prevState);
  }
  return (
    <div class="cart_box_container cart_info">
        {
            isOpenCart && <ContentCart openCart={toggleCartHandler}/>
        }
        {
            !isOpenCart && <MiniCart closeCart={toggleCartHandler}/>
        }
    </div>
  );
};

export default ShoppingCart;
