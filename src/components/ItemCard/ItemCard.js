import React from 'react';

import './ItemCard.scss';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="item-card__img"></div>
      <div className="item-card__info">
        <h5>{item.name}</h5>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default React.memo(ItemCard);
