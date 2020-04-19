import React from 'react'
import { useHistory } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';

import { useCartState, useCartDispatch } from '../../../context/CartContext';

import { ROUTES } from '../../../utils/constants';

import "./CartMenu.scss";

const CartMenu = () => {
  const history = useHistory();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const cartItems = Object.values(cartState)
  return (
    <div className="cart-menu">
      <div className="cart-menu__zone"></div>
      <div className="cart-menu__items">
      {
        cartItems.length ?
        cartItems.map(item => {
          return (
            <CartItem item={item} key={item.id} cartDispatch={cartDispatch}/>
          )
        }) : <h2 className="cart-menu__cart-empty">Your cart is empty</h2>
      }
      </div>
      {
        cartItems.length ?
      <div className="cart-menu__buttons">
        <button className="cart-menu__order-button">
          Proceed order
        </button>
        <button className="cart-menu__clear-button" onClick={() => cartDispatch({ type: "CLEAR_CART" })}>
          Clear
        </button>
      </div> : <button className="cart-menu__go-to-shop" onClick={() => history.push(ROUTES.shop)}>Go to shop</button>
      }
    </div>
  )
}

export default React.memo(CartMenu);
