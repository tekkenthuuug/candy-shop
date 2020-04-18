import React, { useState } from 'react';

import DropdownList from "../DropdownList/DropdownList";

import './SearchField.scss';

const SearchField = ({ setSearchField, onSubmit, searchField, ComponentRight, options }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        onFocus={() => setDropdown(true)}
        onChange={(e) => setSearchField(e.target.value)}
        onKeyUp={(e) => {
          setDropdown(false);
          if (e.keyCode === 13 && onSubmit) {
            e.preventDefault();
            onSubmit(e);
          }
        }}
        placeholder="I want..."
        value={searchField}
      />
      {
        dropdownOpened && options &&
        <div className="search__dropdown-wrapper">
          <DropdownList options={options} setDropdown={setDropdown} setter={setSearchField}/>
        </div>
      }
      {ComponentRight}
    </div>
  );
};

export default React.memo(SearchField);
