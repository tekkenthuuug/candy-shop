import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useQuery from "../../hooks/useQuery";
import useEffectWithTypingTimer from '../../hooks/useEffectWithTimer';

import GoUp from '../../components/GoUp/GoUp';
import Dropdown from '../../components/DropdownSort/DropdownSort';
import SearchField from '../../components/SearchField/SearchField';
import ItemCards from '../../components/ItemCards/ItemCards';
import Filters from '../../components/Filters/Filters';

import fetchJSON from '../../utils/fetchJSON';
import localSearchHistory from "../../utils/localSearchHistory";

import { ROUTES, API_BASE_URL } from '../../utils/constants';

import './Shop.scss';

const sortOptions = [
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
  const [suggested, setSuggested] = useState(localSearchHistory.get()); 
  
  const updateHistory = () => {
    const params = searchField ? `?q=${searchField}` : "";
    history.push(`${ROUTES.shop}${params}`);
  }

  useEffectWithTypingTimer(() => {
    updateHistory();
    fetchJSON(`${API_BASE_URL}/items?search=${searchField}`, { method: "get" })
    .then(data => {
      if (data.result) {
        setItems(data.result);
      };
      if (data.result.length) {
        localSearchHistory.add(searchField);
        setSuggested(localSearchHistory.get());
      }
    })
  }, 600, searchField)

  const [sort, setSort] = useState({
    name: 'price',
    desc: true,
  });


  return (
    <div className="page-container shop">
      <GoUp />
      <Filters />
      <div className="shop__search-section">
        <div className="shop__search-wrapper">
          <SearchField
            setSearchField={setSearchField}
            searchField={searchField}
            options={suggested}
            ComponentRight={<Dropdown options={sortOptions} setter={setSort} sort={sort} />}
          />
        </div>
        <ItemCards items={items} sort={sort} />
      </div>
    </div>
  );
};

export default Shop;
