import React, { useState } from 'react';

import './Dropdown.scss';
import DropdownList from './DropdownList/DropdownList';

const Dropdown = ({ options, setter, sort }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  return (
    <div className="dropdown__btn" onClick={() => setDropdown(!dropdownOpened)}>
      <span>{sort.name}</span>
      <span style={sort.desc ? undefined : { transform: 'rotate(180deg)' }}>&#9660;</span>
      {dropdownOpened && (
        <DropdownList setDropdown={setDropdown} setter={setter} options={options}/>
      )}
    </div>
  );
};

export default Dropdown;
