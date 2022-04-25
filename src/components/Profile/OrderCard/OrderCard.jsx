import React from "react";
import { Link } from "react-router-dom";
import {
  urlOrderDetailsRoute,
  urlProfileRoute,
} from "../../Services/UrlService";

const OrderCard = ({ order }) => {
  return (
    <div id="Tab6" class="tabcontent tab-content detalis-page-tab-content">
      {/* <!-- product desc review information --> */}
      <div class="profile-order-tab">
        <Link to={urlProfileRoute() + urlOrderDetailsRoute() + order.id}>
          <div class="order-id d-flex js-center">
            <span> Order ID #2566</span>
            <aside>Cancel Order</aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span> Date</span>
            <aside>12 October'22 02:30 PM</aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span> Payable Amount</span>
            <aside>Awaiting For Feedback</aside>
          </div>
          <div class="order-dsc d-flex js-center">
            <span>Shipping Address</span>
            <aside>59 BDT</aside>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur , adipisicing elit.
            Necessitatibus fugit, soluta dicta obcaecati eos voluptatibus iste
            culpa, provident est nihil voluptas exercitationem possimus, a
            suscipit?
          </p>
        </Link>
      </div>
      {/* <!-- product desc review information --> */}
    </div>
  );
};

export default OrderCard;
