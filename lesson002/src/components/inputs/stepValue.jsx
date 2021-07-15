import React from "react";

export default class StepValue extends React.Component {
  render() {
    return (
      <div id="input">
        <label htmlFor="stepValue">Step Value</label>
        <input type="number" id="stepValue" />
      </div>
    );
  }
}
