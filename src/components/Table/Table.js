import React from "react";

import "./Table.scss";

const Table = ({ columns, children }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
