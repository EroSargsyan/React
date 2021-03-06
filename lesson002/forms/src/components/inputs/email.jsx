import React from "react";
export default function Email({ onChange, value, result }) {
  return (
    <label htmlFor="email">
      Email:
      <input type="email" id="email" onChange={onChange} value={value} />
      <h5>{result}</h5>
    </label>
  );
}
