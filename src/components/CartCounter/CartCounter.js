import React from 'react'

import { useCartState } from '../../context/CartContext';

import "./CartCounter.scss";

const CartCounter = ({ position = "absolute" }) => {
  const cartSize = Object.keys(useCartState()).length;
  if (!cartSize) return null;
  return (
    <div className="cart-counter" style={{ position: "block" }}>
      {cartSize}
    </div>
  )
}

export default React.memo(CartCounter);
