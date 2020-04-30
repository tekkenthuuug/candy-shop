import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/constants";

import "./Order.scss";

const Order = (props) => {
  const orderId = props.match.params.id;
  return (
    <div className="page-container order">
      <div className="order__info">
        <h1>Thank you for your order!</h1>
        <h3>
          Our team will contact your as soon as possible to confirm your order
        </h3>
        <p>Your order number is: {orderId}</p>
      </div>
      <div>
        <Link to={ROUTES.shop} className="order__to-shop">
          Go back to shop
        </Link>
        <p className="order__questions">
          Have any questions?{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:durka@gmail.com"
          >
            Feel free to contact us!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Order;
