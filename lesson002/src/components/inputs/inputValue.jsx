import React from "react";

export default function InputValue({ ...props }) {
  return (
    <div id="input">
      <label htmlFor="inputValue">Input Value</label>
      <input type="number" id="inputValue" {...props} />
    </div>
  );
}
