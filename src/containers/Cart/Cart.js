import React from 'react'

import CartItem from "../../components/CartItem/CartItem";

import { useCartState, useCartDispatch } from "../../context/CartContext";

import "./Cart.scss";

const Cart = () => {
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const cartItems = Object.values(cartState)

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <div className="page-container cart-page">
      <div className="cart-page__items">
        {
          cartItems.map((item, index) => {
            return (
              <CartItem item={item} key={index} cartDispatch={cartDispatch} withPopularQuantity={true}/>
            ) 
          })
        }
      </div>
      <div className="cart-page__side">
        <h4>Total:</h4>
        <p>{total.toFixed(2)}$</p>
        <button>
          Order
        </button>
      </div>
    </div>
  )
}

export default Cart;
