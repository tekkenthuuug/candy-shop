import React from "react";

import OrderSummary from "../OrderSummary/OrderSummary";

const ProfileOrders = ({ orders }) => {
  return (
    <>
      <h2>Your orders history</h2>
      {!orders.length ? (
        <p>There is not orders yet! :(</p>
      ) : (
        orders.map((order) => {
          return <OrderSummary order={order} key={order.id} />;
        })
      )}
    </>
  );
};

export default ProfileOrders;
