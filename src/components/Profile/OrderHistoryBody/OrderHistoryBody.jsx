import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  urlAllOrderRoutes,
  urlConfirmedRoutes,
  urlOrderProcessing,
  urlOrderRoute,
  urlProfileRoute,
  urlOrderDelivaringRoute,
  urlOrderCancelingRoute,
  urlOrderDetailsRoute,
} from "../../Services/UrlService";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderList from "../OrderList/OrderList";

const OrderHistoryBody = () => {
  const ORDERS = [
    {
      id: 25,
    },
  ];
  return (
    <div>
      <Route path={urlProfileRoute() + urlOrderRoute()} exact>
        <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
      </Route>

      <Route path={urlProfileRoute() + urlAllOrderRoutes()} exact>
        <OrderList orders={ORDERS} />
      </Route>

      <Route path={urlProfileRoute() + urlConfirmedRoutes()} exact>
        <OrderList orders={ORDERS} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderProcessing()} exact>
        <OrderList orders={ORDERS} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderDelivaringRoute()} exact>
        <OrderList orders={ORDERS} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderCancelingRoute()} exact>
        <OrderList orders={ORDERS} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderDetailsRoute()+':id'} exact>
        <OrderDetails />
      </Route>
    </div>
  );
};

export default OrderHistoryBody;
