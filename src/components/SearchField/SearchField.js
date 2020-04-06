import React, { useState } from 'react';

import Dropdown from '../../components/Dropdown/Dropdown';

import './SearchField.scss';

const dropdownOptions = [
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

const SearchField = ({ setSearchField, setSort, sort }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="I want candy..."
      />
      <div className="search__filter" onClick={() => setDropdown(!dropdownOpened)}>
        <span>{sort.name}</span>
        <span style={sort.desc ? undefined : { transform: 'rotate(180deg)' }}>&#9660;</span>
        {dropdownOpened && <Dropdown options={dropdownOptions} setter={setSort} setDropdown={setDropdown} />}
      </div>
    </div>
  );
};

export default SearchField;
