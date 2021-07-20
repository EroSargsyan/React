import React, { Component } from "react";
import "./todo.css";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.el.textValue,
    };
  }

  handleKeyDown = (e) => {
    if (e.code === "Enter")
      this.props.changeValue(this.props.el.id, this.state.textValue);
  };

  render() {
    const { deleteItem, completeItem, el } = this.props;
    return (
      <li onKeyDown={this.handleKeyDown}>
        <input
          type="text"
          value={this.state.textValue}
          id={el.id}
          className={el.isCompleted ? "lineThrough" : ""}
          onChange={(e) => {
            this.setState((prev) => ({ textValue: e.target.value }));
          }}
        />
        <button
          type="submit"
          id="completeButton"
          onClick={() => {
            completeItem(el);
          }}
        >
          Complete
        </button>
        <button
          type="submit"
          id="deleteButton"
          onClick={() => {
            deleteItem(el);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}
