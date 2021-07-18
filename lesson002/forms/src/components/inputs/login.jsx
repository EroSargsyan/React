import React from "react";
export default function Login({ onChange, value, result }) {
  return (
    <label htmlFor="login">
      Login:
      <input type="text" id="login" onChange={onChange} value={value} />
      <h5>{result}</h5>
    </label>
  );
}
