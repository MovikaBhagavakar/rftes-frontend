import React from "react";

const TableBody = ({ values = [] }) => {
  return (
    <tbody>
      {values.map((value, key) => {
        return (
          <tr>
            <th scope="row">{key + 1}</th>
            {Object.keys(value).map((val, key) => {
              return <td>{value[val]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
