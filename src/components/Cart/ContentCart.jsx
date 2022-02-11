import React from 'react'

const ContentCart = ({openCart}) => {
  return (
    <div class="cart-box-view">
    <div class="cart-box-inner-view">
        <div class="cart-header no_margin card-header-flex-for-sale">
            <div class="card-select-item">
                <img src="/contents/assets/images/add-cart.png" alt="img" />
                <strong class="car-box-title SearchFont">
                    <span>0.00</span>
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
                        <tr class="close">
                            <td class="card-title-heading">
                                <a href="#">
                                    <span class="SearchProductName SearchFont">OG CARE BLOOD GLUCOSE METTER (ORGIN ITALY)</span>
                                </a>
                                <br />
                                <del class="SearchDelPrice SearchDelPriceDel1">৳ 2, 450.00</del>
                                <strong class="SearchPrice SearchDelPriceDel2">৳ 2, 200.05</strong>
                            </td>
                            <td class="card-plus-minuse">
                                <div class="attributes input-group bootstrap-touchspin">
                                    <div class="qty-holder">
                                        <a href="#" class="qty-dec-btn" title="Dec">-</a>
                                        <input type="text" name="product_qty" id="product_qty" class="qty-input" value="1" />
                                        <a href="#" class="qty-inc-btn" title="Inc">+</a>
                                    </div>
                                </div>
                            </td>
                            <td class="amount-for-popup">
                                <span class="SearchFont SearchDelPrice">
                                    <aside>৳ </aside>
                                    <del class="add-postion">2, 450.00</del>
                                    <br />
                                    <span class="SearchFont SearchPrice">2, 200.05</span>
                                </span>
                            </td>
                            <td onclick="this.parentElement.style.display='none';" class="amount-inner-crose">
                                <a href="#"><i class="fa fa-times text-danger"></i></a>
                            </td>
                        </tr>
                        <tr class="close">
                            <td class="card-title-heading">
                                <a href="#">
                                    <span class="SearchProductName SearchFont">OG CARE BLOOD GLUCOSE METTER (ORGIN ITALY)</span>
                                </a>
                                <br />
                                <del class="SearchDelPrice SearchDelPriceDel1">৳ 2, 450.00</del>
                                <strong class="SearchPrice SearchDelPriceDel2">৳ 2, 200.05</strong>
                            </td>
                            <td class="card-plus-minuse">
                                <div class="attributes input-group bootstrap-touchspin">
                                    <div class="qty-holder">
                                        <a href="#" class="qty-dec-btn" title="Dec">-</a>
                                        <input type="text" name="product_qty" id="product_qty" class="qty-input" value="1" />
                                        <a href="#" class="qty-inc-btn" title="Inc">+</a>
                                    </div>
                                </div>
                            </td>
                            <td class="amount-for-popup">
                                <span class="SearchFont SearchDelPrice">
                                    <aside>৳ </aside>
                                    <del class="add-postion">2, 450.00</del>
                                    <br />
                                    <span class="SearchFont SearchPrice">2, 200.05</span>
                                </span>
                            </td>
                            <td onclick="this.parentElement.style.display='none';" class="amount-inner-crose">
                                <a href="#"><i class="fa fa-times text-danger"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="cart-footer">
            <div class="card-footer-inner">
                <button class="cart-cmn-btn">Order Now</button>
                <span class="cart-cmn-btn cart-cmn-btn2">৳ <span>6, 550.05</span></span>
            </div>

            <a class="block-btn-card">
                <button class="cart-cmn-btn">Clear Cart</button>
            </a>
        </div>
    </div>
</div>
  )
}

export default ContentCart