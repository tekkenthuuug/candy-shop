import React from 'react'

import NumberInput from '../../NumberInput/NumberInput';

import "./CartItem.scss";

const CartItem = ({ item, cartDispatch }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img" style={{ backgroundImage: `url(${item.img})`}}></div>
      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <div className="cart-item__close" onClick={() => cartDispatch({ type: "REMOVE_ITEM", payload: item.id })}>&#10006;</div>
        <NumberInput 
          initialState={item.quantity} 
          setter={(state) => cartDispatch({ type: "SET_ITEM_QUANTITY", payload: {
            target: item.id,
            newQuantity: state
          }})}
      />
        <p>{(item.price * item.quantity).toFixed(2)}$</p>
      </div>
    </div>
  )
}

export default CartItem
