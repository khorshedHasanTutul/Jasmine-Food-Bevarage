import React, { useContext } from 'react'
import cartContext from '../Store/cart-context'

const MiniCart = ({closeCart}) => {
  const getCartContext = useContext(cartContext)
  const getCartModal=getCartContext.getCartModel
  return (
    <div class="cart-box view-pop" onClick={closeCart}>
    <div class="cart-items text-center">
        <span class="cart-count">{getCartModal.TotalItems}</span>
        <span>Items</span>
    </div>
    <div class="cart-bag text-center">
        <img src="/contents/assets/images/product/cart-filled.cf69d93e.svg" alt="img" />
    </div>
    <div class="cart-amount">
        <span>৳ </span>
        <span class="cart-amount-span">{getCartModal.TotalAmmount.toFixed(2)}</span>
    </div>
</div>
  )
}

export default MiniCart