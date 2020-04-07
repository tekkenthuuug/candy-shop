import React, { useReducer } from 'react';

import Filter from '../Filter/Filter';

import { FILTERS } from '../../utils/constants';

import './Filters.scss';

const filtersReducer = (state, action) => {
  const tmpState = [...state];
  switch (action.type) {
    case 'ADD_FILTER':
      tmpState.push(action.payload);
      return tmpState;
    case 'REMOVE_FILTER':
      const index = tmpState.indexOf(action.payload);
      tmpState.splice(index, 1);
      return tmpState;
    default:
      throw new Error('Action type is not supported', `(${action.type})`);
  }
};

const Filters = () => {
  const [filters, dispatchFilters] = useReducer(filtersReducer, []);
  return (
    <div className="filters">
      <h4>Filters</h4>
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
