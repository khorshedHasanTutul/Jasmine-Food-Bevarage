import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { GET_ORDERS } from "../../../lib/endpoint";
import { OrderStatus } from "../../../utilities/dictionaries";
import { http } from "../../Services/httpService";
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
import Suspense from "../../Suspense/Suspense";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderList from "../OrderList/OrderList";

const OrderHistoryBody = () => {
  const [ordersArray, setOrdersArray] = useState([]);
  const [confirmedOrders, setConfirmOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState([]);
  const [delivaringOrders, setDelivaringdOrders] = useState([]);
  const [cancellingOrders, setCancellingdOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllOrdersHttp = () => {
    http.get({
      url: GET_ORDERS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log('false');
        setIsLoading(false);
        setOrdersArray(res.data);
        setConfirmOrders(
          res?.data.filter((item) => item?.orderStatus === OrderStatus.Confirmed)
        );
        setProcessingOrders(
          res?.data.filter((item) => item?.orderStatus === OrderStatus.Processing)
        );
        setDelivaringdOrders(
          res?.data.filter((item) => item?.orderStatus === OrderStatus.Delivering)
        );
        setCancellingdOrders(
          res?.data.filter((item) => item?.orderStatus === OrderStatus.Cancelled)
        );
        
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getAllOrdersHttp();
  }, []);

  return (
    <>
      {!isLoading && (
        <div>
          <Route path={urlProfileRoute() + urlOrderRoute()} exact>
            <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
          </Route>

          <Route path={urlProfileRoute() + urlAllOrderRoutes()} exact>
            <OrderList ordersArray={ordersArray} />
          </Route>

          <Route path={urlProfileRoute() + urlConfirmedRoutes()} exact>
            <OrderList ordersArray={confirmedOrders} />
          </Route>

          <Route path={urlProfileRoute() + urlOrderProcessing()} exact>
            <OrderList ordersArray={processingOrders} />
          </Route>

          <Route path={urlProfileRoute() + urlOrderDelivaringRoute()} exact>
            <OrderList ordersArray={delivaringOrders} />
          </Route>

          <Route path={urlProfileRoute() + urlOrderCancelingRoute()} exact>
            <OrderList ordersArray={cancellingOrders} />
          </Route>

          <Route
            path={urlProfileRoute() + urlOrderDetailsRoute() + ":id"}
            exact
          >
            <OrderDetails />
          </Route>
        </div>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default OrderHistoryBody;
