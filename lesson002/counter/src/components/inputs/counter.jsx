import React from "react";
import Decrease from "../buttons/decreaseBtn";
import Increase from "../buttons/increaseBtn";
import Reset from "../buttons/resetBtn";
import InputValue from "./inputValue";
import MaxValue from "./maxValue";
import MinValue from "./minValue";
import StepValue from "./stepValue";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: window.localStorage.getItem("inputValue"),
      maxValue: window.localStorage.getItem("maxValue"),
      minValue: window.localStorage.getItem("minValue"),
      stepValue: window.localStorage.getItem("stepValue"),
      result: window.localStorage.getItem("result"),
    };
  }

  //////buttons event handlers
  increase = () => {
    if (
      Number(this.state.result) > Number(this.state.minValue) &&
      Number(this.state.result) + Number(this.state.stepValue) <
        Number(this.state.maxValue)
    ) {
      this.setState({
        result: Number(this.state.result) + Number(this.state.stepValue),
      });
    }
  };
  decrease = () => {
    if (
      Number(this.state.result) - Number(this.state.stepValue) >
        Number(this.state.minValue) &&
      Number(this.state.result) < Number(this.state.maxValue)
    ) {
      this.setState({
        result: Number(this.state.result) - Number(this.state.stepValue),
      });
    }
  };
  reset = () => {
    this.setState({
      inputValue: 0,
      maxValue: 0,
      minValue: 0,
      stepValue: 0,
      result: 0,
    });
  };
  //////////////////

  ////////////input event handlers
  changeInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
      result: event.target.value,
    });
  };
  changeMaxValue = (event) => {
    this.setState({ maxValue: event.target.value });
  };
  changeMinValue = (event) => {
    this.setState({ minValue: event.target.value });
  };
  changeStepValue = (event) => {
    this.setState({ stepValue: event.target.value });
  };
  ///////////////

  componentDidUpdate() {
    window.localStorage.setItem("inputValue", this.state.inputValue);
    window.localStorage.setItem("maxValue", this.state.maxValue);
    window.localStorage.setItem("minValue", this.state.minValue);
    window.localStorage.setItem("stepValue", this.state.stepValue);
    window.localStorage.setItem("result", this.state.result);
  }

  render() {
    return (
      <div id="container">
        <InputValue
          value={this.state.inputValue}
          onChange={this.changeInputValue}
        />
        <MaxValue value={this.state.maxValue} onChange={this.changeMaxValue} />
        <MinValue value={this.state.minValue} onChange={this.changeMinValue} />
        <StepValue
          value={this.state.stepValue}
          onChange={this.changeStepValue}
        />

        <div id="result">
          <h1>{this.state.result}</h1>
        </div>

        {/* ..................buttons................... */}

        <Decrease onClick={this.decrease} />
        <Increase onClick={this.increase} />
        <Reset onClick={this.reset} />
      </div>
    );
  }
}
