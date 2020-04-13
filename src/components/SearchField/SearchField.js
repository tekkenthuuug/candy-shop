import React from 'react';

import './SearchField.scss';

const SearchField = ({ setSearchField, onSubmit, searchField, ComponentRight }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        onChange={(e) => setSearchField(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            onSubmit(e);
          }
        }}
        placeholder="I want..."
        value={searchField}
      />
      {ComponentRight}
    </div>
  );
};

export default React.memo(SearchField);
