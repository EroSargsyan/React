import React from "react";

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
        <div id="input">
          <label htmlFor="inputValue">Input Value</label>
          <input
            type="number"
            id="inputValue"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
        </div>
        <div id="input">
          <label htmlFor="maxValue">Max Value</label>
          <input
            type="number"
            value={this.state.maxValue}
            id="maxValue"
            onChange={this.changeMaxValue}
          />
        </div>
        <div id="input">
          <label htmlFor="minValue">Min Value</label>
          <input
            type="number"
            id="minValue"
            value={this.state.minValue}
            onChange={this.changeMinValue}
          />
        </div>
        <div id="input">
          <label htmlFor="stepValue">Step Value</label>
          <input
            type="number"
            id="stepValue"
            value={this.state.stepValue}
            onChange={this.changeStepValue}
          />
        </div>
        <div id="result">
          <h1>{this.state.result}</h1>
        </div>
        {/* ..................buttons................... */}
        <div id="button">
          <button onClick={this.decrease}>Decrease</button>
        </div>
        <div id="button">
          <button onClick={this.increase}>Increase</button>
        </div>
        <div id="button">
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
