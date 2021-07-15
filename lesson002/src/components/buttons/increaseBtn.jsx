import React from "react";

export default function Increase({ ...props }) {
  return (
    <div id="button">
      <button {...props}>Increase</button>
    </div>
  );
}
