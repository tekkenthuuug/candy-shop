import React, { useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({ options, setter, sort }) => {
  const [dropdownOpened, setDropdown] = useState(false);

  return (
    <div className="dropdown__btn" onClick={() => setDropdown(!dropdownOpened)}>
      <span>{sort.name}</span>
      <span style={sort.desc ? undefined : { transform: 'rotate(180deg)' }}>&#9660;</span>
      {dropdownOpened && (
        <div className="dropdown--active">
          <div className="dropdown__overlay" onClick={() => setDropdown(false)}></div>
          {options.map((option, index) => {
            return (
              <span key={index} onClick={() => setter(option.value)}>
                {option.dropdownName}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
