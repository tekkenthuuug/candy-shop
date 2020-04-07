import React from 'react';

import './SearchField.scss';

const SearchField = ({ setSearchField, searchField, ComponentRight }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="I want..."
        value={searchField}
      />
      {ComponentRight}
    </div>
  );
};

export default React.memo(SearchField);
