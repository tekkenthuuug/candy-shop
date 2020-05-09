import React from "react";

import "./OrderTableRow.scss";

const OrderTableRow = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default OrderTableRow;
