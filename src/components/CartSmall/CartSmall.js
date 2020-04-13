import React from 'react'

import CartCounter from '../CartCounter/CartCounter';

import { ReactComponent as CartLogo } from "../../img/cart.svg";


const CartSmall = () => {
  return (
    <div style={{ position: "relative" }}>
      <CartLogo />
      <div style={{ position: "absolute", right: "-2px", bottom: "-1px", width: "20px", height: "20px" }}>
        <CartCounter />
      </div>
    </div>
  )
}

export default CartSmall;
