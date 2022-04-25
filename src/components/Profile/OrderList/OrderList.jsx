import React, { useEffect, useState } from "react";
import { GET_ORDERS } from "../../../lib/endpoint";
import { http } from "../../Services/httpService";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ orders }) => {
  const [ordersArray, setOrdersArray] = useState([]);
  const getAllOrdersHttp = () => {
    http.get({
      url: GET_ORDERS,
      before: () => {},
      successed: (res) => {
        console.log(res.data);
        setOrdersArray(res.data);
      },
      failed: () => {},
      always: () => {},
    });
  };

  useEffect(() => {
    getAllOrdersHttp();
  }, []);

  if (ordersArray?.data === undefined) {
    return (
      <div className="brick label info" style={{ marginTop: "10px" }}>
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  } else {
    return (
      <div className="tabbed niiceeTabContent profile-tab">
        {ordersArray.data.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </div>
    );
  }
};

export default OrderList;
