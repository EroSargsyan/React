import React from "react";

export default function StepValue({ ...props}) {
  return (
    <div id="input">
      <label htmlFor="stepValue">Step Value</label>
      <input type="number" id="stepValue" {...props} />
    </div>
  );
}
