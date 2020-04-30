import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import useEffectWithTypingTimer from "../../hooks/useEffectWithTimer";

import GoUp from "../../components/GoUp/GoUp";
import DropdownSort from "../../components/DropdownSort/DropdownSort";
import SearchField from "../../components/SearchField/SearchField";
import ItemCards from "../../components/ItemCards/ItemCards";
import Filters from "../../components/Filters/Filters";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import fetchJSON from "../../utils/fetchJSON";
import localSearchHistory from "../../utils/localSearchHistory";

import { ROUTES, API_BASE_URL } from "../../utils/constants";

import "./Shop.scss";

const sortOptions = [
  {
    dropdownName: "Price high to low",
    value: {
      name: "price",
      desc: true,
    },
  },
  {
    dropdownName: "Price low to high",
    value: {
      name: "price",
      desc: false,
    },
  },
];

const Shop = () => {
  const history = useHistory();
  const query = new URLSearchParams(history.location.search);

  const [isRequesting, setRequesting] = useState(true);

  const [searchQuery, setSearchQuery] = useState(query.get("q") || "");
  const [searchField, setSearchField] = useState(searchQuery);

  const [items, setItems] = useState([]);
  const [suggested, setSuggested] = useState(localSearchHistory.get());

  const [sort, setSort] = useState({
    name: "price",
    desc: true,
  });

  const updateHistory = () => {
    const params = searchField ? `?q=${searchField}` : "";
    history.push(`${ROUTES.shop}${params}`);
  };

  const fetchItems = () => {
    setRequesting(true);
    updateHistory();
    fetchJSON(`${API_BASE_URL}/items?search=${searchField}`, {
      method: "get",
    }).then((data) => {
      setRequesting(false);
      if (data.result) {
        setItems(data.result);
        localSearchHistory.add(searchField);
        setSuggested(localSearchHistory.get());
      }
    });
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [searchQuery]);

  useEffectWithTypingTimer(
    () => {
      setSearchQuery(searchField);
    },
    600,
    searchField
  );

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
            ComponentRight={
              <DropdownSort
                options={sortOptions}
                setter={setSort}
                sort={sort}
              />
            }
          />
        </div>
        {isRequesting ? (
          <LoadingSpinner />
        ) : (
          <ItemCards items={items} sort={sort} />
        )}
      </div>
    </div>
  );
};

export default Shop;
