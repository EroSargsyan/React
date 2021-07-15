import React from "react";

export default class MaxValue extends React.Component {
  render() {
    return (
      <div id="input">
        <label htmlFor="maxValue">Max Value</label>
        <input type="number" id="maxValue" />
      </div>
    );
  }
}

// function Input(props) {
//   return (
//     <div id="input">
//       <label htmlFor="maxValue">{props.text}</label>
//       <input type="number" id="maxValue" />
//     </div>
//   );
// }
