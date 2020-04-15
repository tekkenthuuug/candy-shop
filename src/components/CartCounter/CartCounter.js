import React from 'react'

import { useCartState } from '../../context/CartContext';

import "./CartCounter.scss";

const CartCounter = () => {
  const cartSize = Object.keys(useCartState()).length;
  if (!cartSize) return null;
  return (
    <span className="cart-counter">
      {cartSize}
    </span>
  )
}

export default React.memo(CartCounter);
