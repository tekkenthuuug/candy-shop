import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useQuery from "../../hooks/useQuery";

import GoUp from '../../components/GoUp/GoUp';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchField from '../../components/SearchField/SearchField';
import ItemCards from '../../components/ItemCards/ItemCards';
import Filters from '../../components/Filters/Filters';

import { ROUTES } from '../../utils/constants';

import './Shop.scss';

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
  const query = useQuery();
  const history = useHistory();
  const [searchField, setSearchField] = useState(query.get("q") || '');

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8000/items").then(r => r.json()).then(data => {
      if (data.result) {
        setItems(data.result)
      }
    })
  }, [])

  const [sort, setSort] = useState({
    name: 'price',
    desc: true,
  });

  const redirectToShop = () => {
    history.push(`${ROUTES.shop}?q=${searchField}`);
  }

  return (
    <div className="page-container shop">
      <GoUp />
      <Filters />
      <div className="shop__search-section">
        <div className="shop__search-wrapper">
          <SearchField
            setSearchField={setSearchField}
            searchField={searchField}
            onSubmit={redirectToShop}
            ComponentRight={<Dropdown options={dropdownOptions} setter={setSort} sort={sort} />}
          />
        </div>
        <ItemCards items={items} sort={sort} />
      </div>
    </div>
  );
};

export default Shop;
