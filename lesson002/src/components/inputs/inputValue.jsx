import React from "react";

export default class InputValue extends React.Component {
  render() {
    return (
      <div id="input">
        <label htmlFor="inputValue">Input Value</label>
        <input type="number" id="inputValue" />
      </div>
    );
  }
}
