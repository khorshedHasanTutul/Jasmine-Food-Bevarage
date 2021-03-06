import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GET_ORDER_DETAILS } from "../../../lib/endpoint";
import { humanizeShortDateTime } from "../../helpers/utilities";
import { http } from "../../Services/httpService";
import authContext from "../../Store/auth-context";
import Suspense from "../../Suspense/Suspense";

const OrderDetails = () => {
  let { id } = useParams();
  const authCtx = useContext(authContext);
  const [orderDetails, setOrderDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let getDate = new Date(orderDetails?.createdAt);
  console.log({ orderDetails });

  const printInvoiceHandler = () => {
    localStorage.setItem(
      "Invoice",
      JSON.stringify({
        orderNo: orderDetails?.orderNumber,
        userName: authCtx.user.name,
        phone: authCtx.user.phone,
        orderDate: `${getDate.toLocaleDateString()} ${getDate.toLocaleTimeString()}`,
        today: humanizeShortDateTime(`/Date(${new Date().getTime()})/`),
        products: orderDetails?.products,
        subTotal: orderDetails?.orderValue,
        payable: orderDetails?.payableAmount,
        couponDiscount: orderDetails?.coupon,
        deliveryChange: orderDetails?.shippingCharge,
        address: {
          contactName: orderDetails?.name,
          phone: orderDetails?.phone,
          email: orderDetails?.email,
          text: orderDetails?.remarks,
          upazila: orderDetails?.address.upazila.name,
          district: orderDetails?.address.district.name,
          division: orderDetails?.address.province.name,
        },
      })
    );
    window.open("/invoice.html", "_blank");
  };

  const getOrderDetailsHttp = () => {
    http.get({
      url: GET_ORDER_DETAILS + id,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setOrderDetails(res.data);
        setIsLoading(false);
      },
      failed: () => {
        setIsLoading(false);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  useEffect(() => {
    getOrderDetailsHttp();
  }, []);

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

      {!isLoading && (
        <div class="tabbed niiceeTabContent profile-tab invoice-tab">
          <div class="brick label happiness">
            <div class="Steps_steps__3SNbF Steps_wide__2JixU">
              <div class="line">
                <div class="filler"></div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false active">1</p>
                <div class="Steps_details__1CSho">
                  <h5>pending</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">2</p>
                <div class="Steps_details__1CSho">
                  <h5>confirmed</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">3</p>
                <div class="Steps_details__1CSho">
                  <h5>processing</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">4</p>
                <div class="Steps_details__1CSho">
                  <h5>delivering</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">5</p>
                <div class="Steps_details__1CSho">
                  <h5>delivered</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="shaping-address-saveing-row">
            <div class="shapping-address-inner-content">
              <div class="saving-address-content">
                <small>{orderDetails?.address.name}</small>
                <small>{orderDetails?.address.phone}</small>
                <span>
                  <aside>
                    {orderDetails?.address.typeOfAddress === 0
                      ? "Home"
                      : orderDetails?.address.typeOfAddress === 1
                      ? "Office"
                      : "HomeTown"}
                  </aside>
                </span>
                <span>{orderDetails?.address.email}&nbsp;</span>
                <span>
                  {orderDetails?.address.province.name}-
                  {orderDetails?.address.district.name}-
                  {orderDetails?.address.upazila.name}-
                  {orderDetails?.address.remarks}
                </span>
              </div>
            </div>
          </div>

          <div class="inv-flex-content d-flex js-center al-center">
            <h4>Order Invoice</h4>
            <button
              type="button"
              onclick="printDiv('page')"
              value="print a div!"
              onClick={printInvoiceHandler}
            >
              <span class="monami-button__text">Print Invoice</span>
            </button>
          </div>

          <div id="page" class="order-invoice">
            <div class="order-invoice-ea">
              <div class="page">
                <div class="custom-row-top">
                  <div class="span4">
                    <img
                      src="/contents/assets/images/logo-01.png"
                      alt="img"
                      class="no-print"
                    />
                    <img
                      src="/contents/assets/images/logo-01.png"
                      alt="img"
                      class="print"
                    />
                    <address>
                      <h2>Jasmine Food & Beverage</h2>
                      Dilu Road,New Eskaton, Dhaka
                      <br />
                    </address>
                  </div>
                  <div class="span4 well">
                    <table class="invoice-head">
                      <tbody>
                        <tr>
                          <td class="pull-right">
                            <strong>Name</strong>
                          </td>
                          <td>{orderDetails?.address.name}</td>
                        </tr>
                        <tr>
                          <td class="pull-right">
                            <strong>Order ID</strong>
                          </td>
                          <td>{orderDetails?.orderNumber}</td>
                        </tr>
                        <tr>
                          <td class="pull-right">
                            <strong>Mobile</strong>
                          </td>
                          <td>{orderDetails?.address.phone}</td>
                        </tr>
                        <tr>
                          <td class="pull-right">
                            <strong>Order Date</strong>
                          </td>
                          <td>{getDate.toLocaleDateString()}</td>
                        </tr>
                        <tr>
                          <td class="pull-right">
                            <strong>Invoice Date</strong>
                          </td>
                          <td>20-08-2013</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="invoice">
                  <h2>Invoice</h2>
                </div>
                <div class="custom-table-row">
                  <div class="span12 well invoice-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>sl</th>
                          <th>Product</th>
                          <th>Current Price</th>
                          <th>Quantity</th>
                          <th>Discount</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails?.products.map((item, index) => (
                          <tr>
                            <td>0{index + 1}</td>
                            <td>{item.displayName}</td>
                            <td>{item.currentPrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.discount}</td>
                            <td>{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="sum-table-for-invoice">
                    <table class="table table-bordered small-table-sum">
                      <tbody>
                        <tr>
                          <td>SubTotal</td>
                          <td class="SubTotal-tab">
                            <span>{orderDetails?.orderValue}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Coupon Discount</td>
                          <td class="SubTotal-tab">
                            <span>{orderDetails?.coupon}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Total order value</td>
                          <td class="SubTotal-tab">
                            <span>{orderDetails?.orderValue}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Delivery charge</td>
                          <td class="SubTotal-tab">
                            <span>{orderDetails?.shippingCharge}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Amount Payable</strong>
                          </td>
                          <td class="SubTotal-tab">
                            <strong>{orderDetails?.payableAmount}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="footer-row">
                  <div class="cask-rewarded">
                    <span>
                      {orderDetails?.cashback} Taka Cashback Rewarded For This
                      Order
                    </span>
                    <p>
                      *** N.B: This cashback will be applicable at your next
                      Order
                    </p>
                    <h5>Thank You!</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <Suspense />}
    </div>
  );
};

export default OrderDetails;
