import React from "react";
import { NavLink } from "react-router-dom";
import { urlConfirmedRoutes, urlOrderCancelingRoute, urlOrderDelivaringRoute, urlOrderProcessing, urlOrderRoute, urlProfileRoute } from "../../Services/UrlService";

const OrderHistoryHeader = () => {
  return (
    <nav class="niiceeTabBtn">
      <NavLink activeClassName="active" className="orderBtn" to={urlProfileRoute()+urlOrderRoute()} >
        <button
          id="defaultOpen"
          class="tablinks"
          onclick="tabOpener(event, 'Tab6')"
        >
          All Order
        </button>
      </NavLink>

      <NavLink activeClassName="active" className="orderBtn" to={urlProfileRoute()+urlConfirmedRoutes()} exact>
        <button class="tablinks" onclick="tabOpener(event, 'Tab7')">
          Confirmed Orders
        </button>
      </NavLink>
      <NavLink activeClassName="active" className="orderBtn" to={urlProfileRoute()+urlOrderProcessing()} exact>
        <button class="tablinks" onclick="tabOpener(event, 'Tab8')">
          Processing
        </button>
      </NavLink>
      <NavLink activeClassName="active" className="orderBtn" to={urlProfileRoute()+urlOrderDelivaringRoute()} exact>
        <button class="tablinks" onclick="tabOpener(event, 'Tab9')">
          Delivered
        </button>
      </NavLink>
      <NavLink activeClassName="active" className="orderBtn" to={urlProfileRoute()+urlOrderCancelingRoute()} exact>
        <button class="tablinks" onclick="tabOpener(event, 'Tab10')">
          Canceled
        </button>
      </NavLink>
    </nav>
  );
};

export default OrderHistoryHeader;
