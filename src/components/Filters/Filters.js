import React, { useReducer } from 'react';

import Filter from '../Filter/Filter';


import { FILTERS } from '../../utils/constants';

import './Filters.scss';

const filtersReducer = (state, action) => {
  const newFilters = [...state];
  switch (action.type) {
    case 'ADD_FILTER':
      newFilters.push(action.payload);
      return newFilters;
    case 'REMOVE_FILTER':
      const index = newFilters.indexOf(action.payload);
      newFilters.splice(index, 1);
      return newFilters;
    default:
      throw new Error('Action type is not supported', `(${action.type})`);
  }
};

const Filters = () => {
  const [filters, dispatchFilters] = useReducer(filtersReducer, []);
  return (
    <div className="filters">
      {FILTERS.map((section, index) => {
        return (
          <div className="filters__section" key={index}>
            {section.map((filter, index) => {
              return <Filter name={filter} key={index} dispatchFilters={dispatchFilters} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Filters);
