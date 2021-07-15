import React from "react";
export default function Password({ onChange, value, result }) {
  return (
    <label htmlFor="password">
      Password:
      <input type="password" id="password" onChange={onChange} value={value} />
      <h4>{result}</h4>
    </label>
  );
}
