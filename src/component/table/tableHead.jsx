import React from "react";

const TableHead = ({ options }) => {
  return (
    <thead>
      <tr>
        {options?.map((option, key) => {
          return (
            <th scope="col" key={key}>
              {option}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
