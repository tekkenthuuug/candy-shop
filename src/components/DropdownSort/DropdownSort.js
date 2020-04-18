import React, { useState } from 'react';

import DropdownList from '../DropdownList/DropdownList';

import './DropdownSort.scss';

const Dropdown = ({ options, setter, sort }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  return (
    <div className="dropdown-sort" onClick={() => setDropdown(!dropdownOpened)}>
      <span>{sort.name}</span>
      <span style={sort.desc ? undefined : { transform: 'rotate(180deg)' }}>&#9660;</span>
      {dropdownOpened && (
        <DropdownList setDropdown={setDropdown} setter={setter} options={options}/>
      )}
    </div>
  );
};

export default Dropdown;
