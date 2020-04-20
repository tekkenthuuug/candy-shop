import React from 'react';

import ItemCard from '../ItemCard/ItemCard';

import './ItemCards.scss';

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
    return <h1 className="no-items-found">No items found :(</h1>;
  }

  return (
    <div className="items-container">
      {sortedItems}
    </div>
  );
};

export default React.memo(ItemCards);
