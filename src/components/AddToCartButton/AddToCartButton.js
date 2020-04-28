import React from "react";

import { useCartDispatch } from "../../context/CartContext";

import "./AddToCartButton.scss";

const AddToCartButton = ({ callback, item }) => {
  const cartDispatch = useCartDispatch();

  const handleAddToCart = () => {
    cartDispatch({ type: "ADD_ITEM", payload: item });
    if (callback) callback();
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
