import React, { useState, useEffect, useRef, useReducer } from "react";

import useEffectWithTimer from "../../hooks/useEffectWithTimer";

import GoUp from "../../components/GoUp/GoUp";
import DropdownSort from "../../components/DropdownSort/DropdownSort";
import SearchField from "../../components/SearchField/SearchField";
import ItemCards from "../../components/ItemCards/ItemCards";
import Filters from "../../components/Filters/Filters";

import fetchJSON from "../../utils/fetchJSON";
import localSearchHistory from "../../utils/localSearchHistory";

import { ROUTES, API_BASE_URL } from "../../utils/constants";

import "./Shop.scss";
import filtersReducer from "../../reducers/FiltersReducer";

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
  const passedSearch = query.get("search");

  const didMount = useRef(false);

  const [isRequesting, setRequesting] = useState(true);

  // Gets sent with an API call
  const [searchQuery, setSearchQuery] = useState(passedSearch || "");
  // Input state
  const [searchField, setSearchField] = useState(passedSearch || "");

  const [filters, dispatchFilters] = useReducer(filtersReducer, []);

  const [items, setItems] = useState([]);
  const [suggested, setSuggested] = useState(localSearchHistory.get());

  const [sort, setSort] = useState({
    name: "price",
    desc: true,
  });

  const createSearchParams = () => {
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.append("search", searchQuery);
    if (filters.length) searchParams.append("filter", filters.join(";"));
    return searchParams;
  };

  /** searchParams - URLSearchParams class */
  const pushToHistoryWithParams = (route, searchParams) => {
    history.push(`${route}${"?" + searchParams.toString()}`);
  };

  const fetchItems = async () => {
    setRequesting(true);

    localSearchHistory.add(searchQuery);
    setSuggested(localSearchHistory.get());

    const searchParams = createSearchParams();
    const data = await fetchJSON(
      `${API_BASE_URL}/items${"?" + searchParams.toString()}`,
      {
        method: "get",
      }
    );
    console.log(data.result);
    if (data.result) {
      setItems(data.result);
    }

    setRequesting(false);
  };

  // Query params effect
  useEffect(() => {
    setRequesting(true);
    setSearchField(passedSearch || "");
    // eslint-disable-next-line
  }, [history.location.search]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
    } else {
      pushToHistoryWithParams(ROUTES.shop, createSearchParams());
    }
    fetchItems();
    // eslint-disable-next-line
  }, [searchQuery, filters]);

  useEffectWithTimer(
    () => {
      setSearchQuery(searchField);
    },
    600,
    searchField
  );

  return (
    <div className="page-container shop">
      <GoUp />
      <Filters dispatchFilters={dispatchFilters} />
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
        <ItemCards items={items} sort={sort} isRequesting={isRequesting} />
      </div>
    </div>
  );
};

export default Shop;
