import React, { useState } from 'react'

import CartCounter from '../CartCounter/CartCounter';
import CartMenu from './CartMenu/CartMenu';

import { ReactComponent as CartLogo } from "../../img/cart.svg";

import "./CartSmall.scss";

const CartSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="cart-small" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
      <CartLogo />
      <div className="cart-small__counter-wrapper">
        <CartCounter />
      </div>
      {
        showMenu && <CartMenu />
      }
    </div>
  )
}

export default React.memo(CartSmall);
