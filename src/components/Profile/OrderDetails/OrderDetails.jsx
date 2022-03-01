import React from 'react'

const OrderDetails = () => {
  return (
    <div>
             {/* <!-- Tab links -->
             <!-- <nav class="niiceeTabBtn">
                 <button id="defaultOpen" class="tablinks active" onclick="tabOpener(event, 'Tab6')">All Order</button>
                 <button class="tablinks" onclick="tabOpener(event, 'Tab7')">Confirmed Orders</button>
                 <button class="tablinks" onclick="tabOpener(event, 'Tab8')">Processing</button>
                 <button class="tablinks" onclick="tabOpener(event, 'Tab9')">Delivered</button>
                 <button class="tablinks" onclick="tabOpener(event, 'Tab10')">Canceled</button>
             </nav> --> */}

             <div class="tabbed niiceeTabContent profile-tab invoice-tab">
                 <div class="brick label happiness">
                     <div class="Steps_steps__3SNbF Steps_wide__2JixU">
                         <div class="line"><div class="filler"></div></div>
                         <div class="Steps_step__2Wic5">
                             <p class="Steps_step__counter__2y6zu false active">1</p>
                             <div class="Steps_details__1CSho"><h5>pending</h5></div>
                         </div>
                         <div class="Steps_step__2Wic5">
                             <p class="Steps_step__counter__2y6zu false false">2</p>
                             <div class="Steps_details__1CSho"><h5>confirmed</h5></div>
                         </div>
                         <div class="Steps_step__2Wic5">
                             <p class="Steps_step__counter__2y6zu false false">3</p>
                             <div class="Steps_details__1CSho"><h5>processing</h5></div>
                         </div>
                         <div class="Steps_step__2Wic5">
                             <p class="Steps_step__counter__2y6zu false false">4</p>
                             <div class="Steps_details__1CSho"><h5>delivering</h5></div>
                         </div>
                         <div class="Steps_step__2Wic5">
                             <p class="Steps_step__counter__2y6zu false false">5</p>
                             <div class="Steps_details__1CSho"><h5>delivered</h5></div>
                         </div>
                     </div>
                 </div>
                 

                 <div class="shaping-address-saveing-row">
                     <div class="shapping-address-inner-content">
                         <div class="saving-address-content">
                             <small>jakma</small><small>01725740820</small><span><aside>Office</aside></span><span>jakma@outlook.com</span><span>Dhaka-Dhaka-Mirpur-Mirpur Block C Road 12</span>
                         </div>
                     </div>
                 </div>

                 <div class="inv-flex-content d-flex js-center al-center">
                     <h4>Order Invoice</h4>
                     <button type="button" onclick="printDiv('page')" value="print a div!">
                         <span class="monami-button__text">Print Invoice</span>
                     </button>
                 </div>

                 <div id="page"  class="order-invoice">
                     <div class="order-invoice-ea">
                         <div class="page">
                             <div class="custom-row-top">
                                 <div class="span4">
                                     <img src="/contents/assets/images/logo-01.png" alt="img" class="no-print" />
                                     <img src="/contents/assets/images/logo-01.png" alt="img" class="print" />
                                     <address>
                                         <h2>Jasmine Food & Beverage</h2>
                                         Dilu Road,New Eskaton, Dhaka<br />
                                     </address>
                                 </div>
                                 <div class="span4 well">
                                     <table class="invoice-head">
                                         <tbody>
                                             <tr>
                                                 <td class="pull-right"><strong>Name</strong></td>
                                                 <td>Jack Ma</td>
                                             </tr>
                                             <tr>
                                                 <td class="pull-right"><strong>Order ID</strong></td>
                                                 <td>#41824</td>
                                             </tr>
                                             <tr>
                                                 <td class="pull-right"><strong>Mobile</strong></td>
                                                 <td>8801745896321</td>
                                             </tr>
                                             <tr>
                                                 <td class="pull-right"><strong>Order Date</strong></td>
                                                 <td>10-08-2013</td>
                                             </tr>
                                             <tr>
                                                 <td class="pull-right"><strong>Invoice Date</strong></td>
                                                 <td>20-08-2013</td>
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                             <div class="invoice"><h2>Invoice</h2></div>
                             <div class="custom-table-row">
                                 <div class="span12 well invoice-body">
                                     <table class="table table-bordered">
                                         <thead>
                                             <tr>
                                                 <th>sl</th>
                                                 <th>Product</th>
                                                 <th>Description</th>
                                                 <th>Quantity</th>
                                                 <th>Discount</th>
                                                 <th>Amount</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                 <td>01</td>
                                                 <td>SEO Bronze</td>
                                                 <td>www.swaransoft.com</td>
                                                 <td>8 Months</td>
                                                 <td>0</td>
                                                 <td>1000</td>
                                             </tr>
                                             <tr>
                                                 <td>02</td>
                                                 <td>SEO Bronze</td>
                                                 <td>www.swaransoft.com</td>
                                                 <td>8 Months</td>
                                                 <td>0</td>
                                                 <td>1000</td>
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                                 <div class="sum-table-for-invoice">
                                     <table class="table table-bordered small-table-sum">
                                         <tbody>
                                             <tr>
                                                 <td>SubTotal</td>
                                                 <td class="SubTotal-tab"><span>1.51</span></td>
                                             </tr>
                                             <tr>
                                                 <td>Rounding Off</td>
                                                 <td class="SubTotal-tab">
                                                     <span>0.51</span>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>Coupon Discount</td>
                                                 <td class="SubTotal-tab">
                                                     <span>55</span>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>Total order value</td>
                                                 <td class="SubTotal-tab"><span>1.00</span></td>
                                             </tr>
                                             <tr>
                                                 <td>Delivery charge (Inside Dhaka)</td>
                                                 <td class="SubTotal-tab"><span>29</span></td>
                                             </tr>
                                             <tr>
                                                 <td><strong>Amount Payable</strong></td>
                                                 <td class="SubTotal-tab"><strong>30.00</strong></td>
                                             </tr>
                                         </tbody>
                                     </table>
                                 </div>
                             </div>
                             <div class="footer-row">
                                 <div class="cask-rewarded">
                                     <span>0 Taka Cashback Rewarded For This Order</span>
                                     <p>*** N.B: This cashback will be applicable at your next Order</p>
                                     <h5>Thank You!</h5>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 
             </div>
</div>
  )
}

export default OrderDetails