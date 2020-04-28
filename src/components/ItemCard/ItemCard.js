import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AddToCartButton from "../AddToCartButton/AddToCartButton";

import { ROUTES } from "../../utils/constants";

import "./ItemCard.scss";

const ItemCard = ({ item }) => {
  const itemCardRef = useRef(null);
  const [cardTimeout, setCardTimeout] = useState();
  useEffect(() => {
    return () => {
      clearTimeout(cardTimeout);
    };
  }, [cardTimeout]);

  const playAddToCartAnimation = () => {
    itemCardRef.current.classList.add("item-card--added");
    setCardTimeout(
      setTimeout(() => {
        itemCardRef.current.classList.remove("item-card--added");
      }, 300)
    );
  };

  const itemLink = `${ROUTES.item}/${item.id}`;

  return (
    <div className="item-card" ref={itemCardRef}>
      <Link to={itemLink}>
        <div
          className="item-card__img"
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
      </Link>
      <div className="item-card__info">
        <Link to={itemLink}>
          <h5>{item.name}</h5>
        </Link>
        <div>
          <p>${item.price}</p>
          <div className="item-card__add-wrapper">
            <AddToCartButton item={item} callback={playAddToCartAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemCard);
