import React, { useState } from 'react';

import DropdownList from '../DropdownList/DropdownList';

import useClickOutside from "../../hooks/useClickOutside";

import './DropdownSort.scss';
import { useRef } from 'react';

const DropdownSort = ({ options, setter, sort }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  const dropdownButtonRef = useRef(null);

  useClickOutside(dropdownButtonRef, () => {
    setDropdown(false);
  })

  const buttonClass = dropdownOpened ? "dropdown-sort dropdown-sort--active" : "dropdown-sort";

  return (
    <div className={buttonClass} onClick={() => setDropdown(!dropdownOpened)} ref={dropdownButtonRef}>
      <span>{sort.name}</span>
      <span style={sort.desc ? undefined : { transform: 'rotate(180deg)' }}>&#9660;</span>
      {dropdownOpened && (
        <DropdownList setDropdown={setDropdown} setter={setter} options={options}/>
      )}
    </div>
  );
};

export default React.memo(DropdownSort);
