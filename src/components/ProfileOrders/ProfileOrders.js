import React from "react";

import OrderSummary from "../OrderSummary/OrderSummary";

const ProfileOrders = ({ orders }) => {
  return (
    <>
      <h2>Your orders history</h2>
      {orders.map((order) => {
        return <OrderSummary order={order} key={order.id} />;
      })}
    </>
  );
};

export default ProfileOrders;
