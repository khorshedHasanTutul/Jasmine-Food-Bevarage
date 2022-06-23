import React from "react";
import { Link } from "react-router-dom";
import {
  urlOrderDetailsRoute,
  urlProfileRoute,
} from "../../Services/UrlService";

const OrderCard = ({ order, key }) => {
  let created_at = new Date(order.createdAt);
  console.log({ order });

  return (
    <div id="Tab6" class="tabcontent tab-content detalis-page-tab-content">
      {/* <!-- product desc review information --> */}
      <div class="profile-order-tab">
        <Link to={urlProfileRoute() + urlOrderDetailsRoute() + order.id}>
          <div class="order-id d-flex js-center">
            <span> Order ID #{order.orderNumber}</span>
            <aside>Cancel Order</aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span> Date</span>
            <aside>
              {created_at.toLocaleDateString()}&nbsp;
              {created_at.toLocaleTimeString()}
            </aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span> Payable Amount</span>
            <aside>{order.payableAmount}</aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span>Shipping Address</span>
            <aside style={{ fontWeight: "500" }}>
              {order?.address.province.name}-{order?.address.district.name}-
              {order?.address.upazila.name}-{order?.address.remarks}
            </aside>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur , adipisicing elit.
            Necessitatibus fugit, soluta dicta obcaecati eos voluptatibus iste
            culpa, provident est nihil voluptas exercitationem possimus, a
            suscipit?
          </p> */}
        </Link>
      </div>
      {/* <!-- product desc review information --> */}
    </div>
  );
};

export default OrderCard;
