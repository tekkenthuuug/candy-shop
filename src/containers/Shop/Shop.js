import React, { useState, useEffect, useRef } from "react";

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

const Shop = (props) => {
  const { history } = props;
  const query = new URLSearchParams(history.location.search);
  const passedSearch = query.get("q");

  const didMount = useRef(false);

  const [isRequesting, setRequesting] = useState(true);

  // Gets sent with an API call
  const [searchQuery, setSearchQuery] = useState(passedSearch || "");
  // Input state
  const [searchField, setSearchField] = useState(passedSearch || "");

  const [items, setItems] = useState([]);
  const [suggested, setSuggested] = useState(localSearchHistory.get());

  const [sort, setSort] = useState({
    name: "price",
    desc: true,
  });

  const updateHistory = () => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.append("q", searchQuery);
    history.push(
      `${ROUTES.shop}${searchParams && "?" + searchParams.toString()}`
    );
  };

  const fetchItems = () => {
    setRequesting(true);
    fetchJSON(`${API_BASE_URL}/items?search=${searchQuery}`, {
      method: "get",
    }).then((data) => {
      setRequesting(false);
      if (data.result) {
        setItems(data.result);
        localSearchHistory.add(searchQuery);
        setSuggested(localSearchHistory.get());
      }
    });
  };

  // Query params effect
  useEffect(() => {
    setSearchField(passedSearch || "");
    // eslint-disable-next-line
  }, [history.location.search]);

  useEffect(() => {
    updateHistory();
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
