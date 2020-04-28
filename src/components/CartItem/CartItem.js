import React from "react";
import { Link } from "react-router-dom";

import NumberInput from "../NumberInput/NumberInput";

import { ROUTES } from "../../utils/constants";

import "./CartItem.scss";

const popularQuantities = [1, 3, 5, 10];

const CartItem = ({ item, cartDispatch, withPopularQuantity }) => {
  return (
    <div className="cart-item">
      <div
        className="cart-item__img"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div className="cart-item__info">
        <Link to={`${ROUTES.item}/${item.id}`}>{item.name}</Link>
        <div
          className="cart-item__close"
          onClick={() =>
            cartDispatch({ type: "REMOVE_ITEM", payload: item.id })
          }
        >
          &#10006;
        </div>
        <NumberInput
          initialState={item.quantity}
          setter={(state) =>
            cartDispatch({
              type: "SET_ITEM_QUANTITY",
              payload: {
                target: item.id,
                newQuantity: state,
              },
            })
          }
        />
        {withPopularQuantity && (
          <div className="cart-item__popular-quantities">
            {popularQuantities.map((quantity) => {
              return (
                <div
                  key={quantity}
                  onClick={() =>
                    cartDispatch({
                      type: "SET_ITEM_QUANTITY",
                      payload: {
                        target: item.id,
                        newQuantity: quantity,
                      },
                    })
                  }
                >
                  {quantity}
                </div>
              );
            })}
          </div>
        )}
        <p>{(item.price * item.quantity).toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default CartItem;
