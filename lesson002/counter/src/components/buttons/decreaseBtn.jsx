import React from "react";

export default function Decrease({ ...props }) {
  return (
    <div id="button">
      <button {...props}>Decrease</button>
    </div>
  );
}
