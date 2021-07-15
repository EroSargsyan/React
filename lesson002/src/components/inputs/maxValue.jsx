import React from "react";

export default function MaxValue({ ...props }) {
  return (
    <div id="input">
      <label htmlFor="maxValue">Max Value</label>
      <input type="number" id="maxValue" {...props} />
    </div>
  );
}
