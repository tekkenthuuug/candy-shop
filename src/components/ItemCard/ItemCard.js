import React from 'react';
import { Link } from "react-router-dom";

import { useCartDispatch } from '../../context/CartContext';

import { ROUTES } from "../../utils/constants";

import './ItemCard.scss';

const ItemCard = ({ item }) => {
  const cartDispatch = useCartDispatch();
  return (
    <div className="item-card">
      <Link to={`${ROUTES.item}`}>
        <div className="item-card__img"></div>
      </Link>
      <div className="item-card__info">
        <Link to={`${ROUTES.item}`}>
          <h5>{item.name}</h5>
        </Link>
        <div>
          <p>${item.price}</p>
          <div className="item-card__add-to-cart" onClick={() => cartDispatch({ type: "ADD_ITEM", payload: item.id })}>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
