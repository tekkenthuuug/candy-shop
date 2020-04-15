import React from 'react'

import "./CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img" style={{ backgroundImage: `url(${item.img})`}}></div>
      <div className="cart-item__info">
        <h3>{item.name}</h3>
      </div>
    </div>
  )
}

export default CartItem
