import React from "react";

export default function MinValue({ ...props }) {
  return (
    <div id="input">
      <label htmlFor="minValue">Min Value</label>
      <input type="number" id="minValue" {...props} />
    </div>
  );
}
