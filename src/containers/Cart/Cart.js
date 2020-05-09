import React, { useState, useEffect } from "react";

import CartItem from "../../components/CartItem/CartItem";

import localToken from "../../utils/localToken";
import fetchJSON from "../../utils/fetchJSON";
import validateEmail from "../../utils/validateEmail";
import { useCartState, useCartDispatch } from "../../context/CartContext";

import { API_BASE_URL, ROUTES } from "../../utils/constants";

import "./Cart.scss";

const Cart = (props) => {
  const { history } = props;

  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const cartItems = Object.values(cartState);

  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [emailError, setEmailError] = useState("");

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    localToken.checkTokenValidity(
      ({ email, id }) => {
        setEmail(email);
        setAuthenticated(true);
        setUser(id);
      },
      () => {
        setAuthenticated(false);
      }
    );
  }, []);

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
          mail: email,
          items: convertedItems,
          user: user,
        }),
      }).then((data) => {
        if (data.id) {
          cartDispatch({ type: "CLEAR_CART" });
          history.push(`${ROUTES.order}/${data.id}`);
        }
      });
    }
  };

  const onEmailChange = (e) => {
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
            <input
              type="email"
              name="email"
              onChange={onEmailChange}
              value={email}
              disabled={authenticated}
            />
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
