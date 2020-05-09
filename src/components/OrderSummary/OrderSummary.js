import React from "react";

import OrderTableRow from "./OrderTableRow/OrderTableRow";
import Table from "../Table/Table";

import "./OrderSummary.scss";

const OrderSummary = ({ order }) => {
  const dateFormattingOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };

  const items = order.items.map((item) => {
    return <OrderTableRow key={item.id} item={item} />;
  });

  return (
    <div className="order">
      <div className="order-info">
        <div>Order ID: {order.id}</div>
        <div>
          Purchased:{" "}
          {new Date(order.created_at).toLocaleDateString(
            "en-GB",
            dateFormattingOptions
          )}
        </div>
      </div>
      <Table columns={["Name", "Price", "Quantity"]}>{items}</Table>
    </div>
  );
};

export default OrderSummary;
