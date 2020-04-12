import React, { useState } from 'react';

import './Filter.scss';

const Filter = ({ name, dispatchFilters }) => {
  const [checked, setChecked] = useState(false);
  const handleSetFilter = () => {
    if (checked) {
      setChecked(false);
      dispatchFilters({ type: 'REMOVE_FILTER', payload: name });
      return;
    }
    setChecked(true);
    dispatchFilters({ type: 'ADD_FILTER', payload: name });
  };
  return (
    <div className="filter" onClick={handleSetFilter}>
      <div
        className={checked ? 'filter__checkbox filter__checkbox--checked' : 'filter__checkbox'}
      >
        {checked && <span>&#10006;</span>}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default React.memo(Filter);
