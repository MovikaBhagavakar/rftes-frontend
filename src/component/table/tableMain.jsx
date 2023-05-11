import React from "react";

const TableMain = ({ childrenComponent }) => {
  return (
    <table className="table" style={{ height: "500px", overflowY: "scroll" }}>
      {childrenComponent?.map((child, key) => {
        const Component = child.component;
        const props = child.props;
        return <Component key={key} {...props} />;
      })}
    </table>
  );
};

export default TableMain;
