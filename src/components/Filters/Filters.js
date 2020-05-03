import React from "react";

import Filter from "../Filter/Filter";

import { FILTERS } from "../../utils/constants";

import "./Filters.scss";

const Filters = ({ dispatchFilters }) => {
  return (
    <div className="filters">
      {FILTERS.map((section, index) => {
        return (
          <div className="filters__section" key={index}>
            {section.map((filter, index) => {
              return (
                <Filter
                  name={filter}
                  key={index}
                  dispatchFilters={dispatchFilters}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Filters);
