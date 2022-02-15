import React from 'react'

const Payment = () => {
  return (
    <div id="Tab5" class="tabcontent tab-content checkout-main-tab-content">
    <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
            <input type="text" id="discount_code" placeholder="Discount Code..." />
            <button type="submit">Apply</button>
          </form>
    </div>
    <h3 class="sip-add">Shipping Address</h3>
    <div class="shaping-address-saveing-row">
     <div class="shapping-address-inner-content">
         <div class="location-ad-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
         <div class="saving-address-content">
             <small>jakma</small><small>01725740820</small><span><aside>Office</aside></span><span>jakma@outlook.com</span><span>Dhaka-Dhaka-Mirpur-Mirpur Block C Road 12</span>
         </div>
     </div>
    </div>
    
    {/* <!-- product desc review information --> */}
    <div class="product-payment-block-tab">
        <div class="payment-summary-table">
            <table class="table table-bordered table-responsive cart_summary">
                <tbody>
                    <tr>
                        <td class="summary-details-p" colspan="3">Amount</td>
                        <td class="summary-details-p" colspan="2">3350</td>
                    </tr>
                    <tr>
                         <td class="summary-details-p" colspan="3">Discount</td>
                         <td class="summary-details-p" colspan="2">0</td>
                     </tr>
                    <tr>
                         <td class="summary-details-p" colspan="3">Cupon Discount</td>
                         <td class="summary-details-p" colspan="2">3350</td>
                     </tr>
                    <tr>
                        <td class="summary-details-p" colspan="3">Delivery Charge</td>
                        <td class="summary-details-p" colspan="2">80</td>
                    </tr>
                    <tr>
                        <td class="summary-details-p" colspan="3"><strong>Total Amount </strong></td>
                        <td class="summary-details-p" colspan="2"><strong>3430</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="summary-notice-address">
            <p class="OrderNotice" style={{marginTop:"1%"}}>*** Please pay first for outside Dhaka delivery</p>
            <p class="OrderNotice">*** Please pay the delivery charge first for inside Dhaka delivery (Cash on Delivery)</p>
            <p class="OrderNotice">*** Jasmin agent will call you for delivery charge and reconfirm your order</p>
        </div>

        <div class="row-custom">
            <div class="order-inside-outside-main">
                <form>
                    <div class="order-outside-inside-flex">
                        <p>
                            <input type="radio" id="test3" name="radio-group" checked />
                            <label for="test3">Cash on Delivery</label>
                          </p>
                          <p>
                            <input type="radio" id="test4" name="radio-group" />
                            <label for="test4">Onlie Payments</label>
                          </p>
                    </div>
                </form>
            </div>
            <div class="cart_navigation">
              <a class="prev-btn" href="/"><i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i> Continue shopping</a>
              <a href="#demo-modal5" class="next-btn"> Order Now <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i></a>
            </div>
        </div> 
    </div>
    {/* <!-- product desc review information --> */}
</div>
  )
}

export default Payment