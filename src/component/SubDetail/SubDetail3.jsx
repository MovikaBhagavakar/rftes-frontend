import React from "react";

export default function SubDetail3({
  setEmail,
  setPassword,
  setConfirmPassword,
  emailError,
  passwordError,
  confirmPasswordError,
  email,
  password,
  confirmPassword,
}) {
  return (
    <div id="email">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="email"
        placeholder="Email"
        autoComplete="off"
        value={email}
      ></input>
      ,
      <p className="error" style={{ color: "red" }}>
        {emailError}
      </p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="email"
        placeholder="Password"
        autoComplete="off"
        value={password}
      ></input>
      <br></br>
      <p className="error" style={{ color: "red" }}>
        {passwordError}
      </p>
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        className="email"
        placeholder="CPassword"
        autoComplete="off"
        value={confirmPassword}
      ></input>
      <p className="error" style={{ color: "red" }}>
        {confirmPasswordError}
      </p>
    </div>
  );
}
