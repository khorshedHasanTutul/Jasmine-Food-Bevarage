import React, { useEffect, useState } from "react";
import { GET_ORDERS } from "../../../lib/endpoint";
import { http } from "../../Services/httpService";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ ordersArray }) => {
  if (ordersArray.data === undefined || ordersArray?.data.length === 0) {
    return (
      <div className="brick label info" style={{ marginTop: "10px" }}>
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  } else {
    return (
      <div className="tabbed niiceeTabContent profile-tab">
        {ordersArray.data.map((order) => (
          <OrderCard order={order} key={order.orderNumber} />
        ))}
      </div>
    );
  }
};

export default OrderList;
