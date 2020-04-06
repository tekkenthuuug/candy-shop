import React from 'react';

import './Dropdown.scss';

const Dropdown = ({ options, setter, setDropdown }) => {
  return (
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
  );
};

export default Dropdown;
