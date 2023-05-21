import React from "react";

const SubDetail1 = ({
  setName,
  setPhone,
  nameError,
  phoneError,
  name,
  phone,
}) => {
  return (
    <>
      <div className="call">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Yourname"
          className="name"
        ></input>
        <p className="error" style={{ color: "red" }}>
          {nameError}
        </p>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone No"
          className="name"
          value={phone}
        ></input>
        <p className="error" style={{ color: "red" }}>
          {phoneError}
        </p>
      </div>
    </>
  );
};

export default SubDetail1;
