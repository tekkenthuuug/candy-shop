import React from 'react';
import { Link } from "react-router-dom";

import { useCartDispatch } from '../../context/CartContext';

import { ROUTES } from "../../utils/constants";

import './ItemCard.scss';
import { useRef } from 'react';

const ItemCard = ({ item }) => {
  const cartDispatch = useCartDispatch();
  const itemCardRef = useRef(null);

  const handleAddToCart = () => {
    cartDispatch({ type: "ADD_ITEM", payload: item });
    itemCardRef.current.classList.add("item-card--added")
    setTimeout(() => {
      itemCardRef.current.classList.remove("item-card--added")
    }, 300)
  }

  return (
    <div className="item-card" ref={itemCardRef}>
      <Link to={`${ROUTES.item}`}>
        <div className="item-card__img" style={{ backgroundImage: `url(${item.img})` }}></div>
      </Link>
      <div className="item-card__info">
        <Link to={`${ROUTES.item}`}>
          <h5>{item.name}</h5>
        </Link>
        <div>
          <p>${item.price}</p>
          <div className="item-card__add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemCard);
