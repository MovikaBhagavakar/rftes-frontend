import React from "react";

const AdminArticleAction = ({
  label,
  onClick,
  btnTheme,
  dataBsToggle,
  dataBsTarget,
}) => {
  return (
    <button
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`btn mx-1 ${btnTheme}`}
    >
      {label}
    </button>
  );
};

export default AdminArticleAction;
