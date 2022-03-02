import React from "react";
import { NavLink } from "react-router-dom";
import {
  urlAllOrderRoutes,
  urlConfirmedRoutes,
  urlOrderCancelingRoute,
  urlOrderDelivaringRoute,
  urlOrderProcessing,
  urlOrderRoute,
  urlProfileRoute,
} from "../../Services/UrlService";

const OrderHistoryHeader = () => {
  return (
    <nav class="niiceeTabBtn">
      <NavLink
        activeClassName="active"
        className="orderBtn"
        to={urlProfileRoute() + urlAllOrderRoutes()}
        exact
      >
        <button
          id="defaultOpen"
          class="tablinks"
        >
          All Order
        </button>
      </NavLink>

      <NavLink
        activeClassName="active"
        className="orderBtn"
        to={urlProfileRoute() + urlConfirmedRoutes()}
        exact
      >
        <button class="tablinks">
          Confirmed Orders
        </button>
      </NavLink>
      <NavLink
        activeClassName="active"
        className="orderBtn"
        to={urlProfileRoute() + urlOrderProcessing()}
        exact
      >
        <button class="tablinks">
          Processing
        </button>
      </NavLink>
      <NavLink
        activeClassName="active"
        className="orderBtn"
        to={urlProfileRoute() + urlOrderDelivaringRoute()}
        exact
      >
        <button class="tablinks" >
          Delivered
        </button>
      </NavLink>
      <NavLink
        activeClassName="active"
        className="orderBtn"
        to={urlProfileRoute() + urlOrderCancelingRoute()}
        exact
      >
        <button class="tablinks" >
          Canceled
        </button>
      </NavLink>
    </nav>
  );
};

export default OrderHistoryHeader;
