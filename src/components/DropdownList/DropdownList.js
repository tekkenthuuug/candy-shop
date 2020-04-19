import React from 'react'

import "./DropdownList.scss";

const DropdownList = ({ setDropdown, setter, options }) => {
  return (
    <div className="dropdown--active">
          <div className="dropdown__overlay" onClick={() => setDropdown(false)}></div>
          {options.map((option, index) => {
            return (
              <span key={index} onClick={() => {
                  setter(option.value || option)
                  setDropdown(false);
                }}>
                {option.dropdownName || option}
              </span>
            );
          })}
        </div>
  )
}

export default React.memo(DropdownList)
