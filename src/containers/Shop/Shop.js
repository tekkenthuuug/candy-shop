import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import Dropdown from '../../components/Dropdown/Dropdown';
import SearchField from '../../components/SearchField/SearchField';

import './Shop.scss';
import ItemCards from '../../components/ItemCards/ItemCards';
import Filters from '../../components/Filters/Filters';

const mockResponse = [
  {
    id: 1,
    name: 'Generic candy',
    price: 27.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 2,
    name: 'Kinda candy',
    price: 3.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 3,
    name: 'Bad candy',
    price: 12.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 4,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 5,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 6,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 7,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 8,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 9,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 10,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 11,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 12,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
  {
    id: 13,
    name: 'Good candy',
    price: 16.99,
    imgPath: 'https://pakerszop.pl/public/assets//snickers-hi-protein-bar.jpg',
  },
];

const dropdownOptions = [
  {
    dropdownName: 'Price high to low',
    value: {
      name: 'price',
      desc: true,
    },
  },
  {
    dropdownName: 'Price low to high',
    value: {
      name: 'price',
      desc: false,
    },
  },
];

const Shop = () => {
  const history = useHistory();

  const [searchField, setSearchField] = useState(history.location.state?.searchField || '');

  const [items, setItems] = useState(mockResponse);

  const [sort, setSort] = useState({
    name: 'price',
    desc: true,
  });

  return (
    <div className="page-container shop">
      <Filters />
      <div className="shop__search-section">
        <div className="shop__search-wrapper">
          <SearchField
            setSearchField={setSearchField}
            searchField={searchField}
            ComponentRight={<Dropdown options={dropdownOptions} setter={setSort} sort={sort} />}
          />
        </div>
        <ItemCards items={items} sort={sort} />
      </div>
    </div>
  );
};

export default Shop;
