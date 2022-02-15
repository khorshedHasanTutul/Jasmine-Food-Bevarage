import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { urlProductDetails } from '../Services/UrlService'
import cartContext from '../Store/cart-context'

const ProductSummary = ({AddressActiveHandler}) => {
  const getCartContext = useContext(cartContext)
  const getCartModal=getCartContext.getCartModel
  return (
    <div id="Tab3" class="tabcontent tab-content checkout-main-tab-content">
    {/* <!-- product desc review information --> */}
    <div class="cart-tb-tab-content">
        <div class="order-detail-content">
            <table class="table table-bordered table-responsive cart_summary">
                <thead>
                    <tr>
                        <th class="cart_product">Product</th>
                        <th>Description</th>
                        <th>Unit price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th class="action">Remove</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    getCartModal.Items.map(item=>(
                      <tr>
                      <td class="cart_product">
                          <Link href="#"><img src={item.image} alt="img"/></Link>
                      </td>
                      <td class="cart_description">
                          <p class="product-name"><Link to={urlProductDetails()+item.Id}>{item.Nm}</Link></p>
                          <small class="cart_ref">Type : XYZ</small>
                          <br />
                          <small>Company: LPC </small>
                      </td>
                      <td class="price"><span>৳ {item.MRP}</span></td>
                      <td class="qty">
                          <div class="input-group product_qty">
                              <span class="input-group-btn">
                                  <button class="btn btn-white btn-minus" type="button">
                                  <i class="fa fa-minus" aria-hidden="true"></i>
                                </button>
                              </span>
                              <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value="0" />
                               <span class="input-group-btn">
                                    <button class="btn btn-red btn-plus" type="button">
                                  <i class="fa fa-plus" aria-hidden="true"></i>
                                </button>
                              </span>
                            </div>
                      </td>
                      <td class="price"><span>1, 650.00</span></td>
                      <td class="action"><a href>&times;</a></td>
                  </tr>
                    ))
                  }
                   
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"><strong>Total</strong></td>
                        <td colspan="4">
                            <strong>৳ <span>1, 650.00</span></strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
            
            <div class="row-custom">
             <div class="shaping-address-saveing-row">
                 <div class="shapping-address-inner-content">
                     <div class="location-ad-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                     <div class="saving-address-content">
                         <small>jakma</small><small>01725740820</small><span><aside>Office</aside></span><span>jakma@outlook.com</span><span>Dhaka-Dhaka-Mirpur-Mirpur Block C Road 12</span>
                     </div>
                 </div>
                 <div class="saving-ad-btn" onClick={AddressActiveHandler}><button>Change</button></div>
             </div>
                <div class="cart_navigation">
                  <a class="prev-btn" href="/"><i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i> Continue shopping</a>
                  <a class="next-btn"> Proceed to checkout <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        
    </div>
    {/* <!-- product desc review information --> */}
</div>
  )
}

export default ProductSummary