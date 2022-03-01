import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import OrderHistoryBody from "../OrderHistoryBody/OrderHistoryBody";
import OrderHistoryHeader from "../OrderHistoryHeader/OrderHistoryHeader";

const OrderHistory = () => {
  return (
    <div id="niiceeTab" class="page-content">
      {/* <!-- Tab links --> */}
      <OrderHistoryHeader />
      <OrderHistoryBody />
    </div>
  );
};

export default OrderHistory;
