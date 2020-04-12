import React from 'react';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemCard from '../ItemCard/ItemCard';

import './ItemCards.scss';
import { CartProvider } from '../../context/CartContext';

const sortItems = (items, sort) => {
  return items.sort((a, b) => {
    return sort.desc ? b[sort.name] - a[sort.name] : a[sort.name] - b[sort.name];
  });
};

const ItemCards = ({ items, sort }) => {
  const sortedItems = sortItems([...items], sort).map((item, index) => {
    return <ItemCard item={item} key={index} />;
  })

  if (!items.length) {
    return <LoadingSpinner />;
  }

  return (
    <div className="items-container">
      <CartProvider>
        {sortedItems}
      </CartProvider>
    </div>
  );
};

export default React.memo(ItemCards);
