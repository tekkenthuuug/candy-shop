import React, { useState } from "react";

import CartItem from "../../components/CartItem/CartItem";

import { useCartState, useCartDispatch } from "../../context/CartContext";

import "./Cart.scss";
import fetchJSON from "../../utils/fetchJSON";
import { API_BASE_URL } from "../../utils/constants";

const Cart = () => {
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const cartItems = Object.values(cartState);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSendOrder = () => {
    if (!validateEmail(email)) {
      setEmailError("Incorrect email!");
    } else {
      setEmailError("");

      const convertedItems = Object.keys(cartState).map((id) => {
        return {
          id,
          quantity: cartState[id].quantity,
        };
      });

      fetchJSON(`${API_BASE_URL}/order`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          items: convertedItems,
        }),
      });
    }
  };

  const handleChangeEmail = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  return (
    <div className="page-container cart-page">
      <div className="cart-page__items">
        {cartItems.map((item, index) => {
          return (
            <CartItem
              item={item}
              key={index}
              cartDispatch={cartDispatch}
              withPopularQuantity={true}
            />
          );
        })}
      </div>
      <div className="cart-page__side">
        <h4>Total:</h4>
        <p>{total.toFixed(2)}$</p>
        <div className="cart-page__email">
          <label htmlFor="email">Email:</label>
          <div>
            <input type="email" name="email" onChange={handleChangeEmail} />
          </div>
          {emailError && <p>{emailError}</p>}
        </div>
        <button onClick={handleSendOrder} disabled={!email.length}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
