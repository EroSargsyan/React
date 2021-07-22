import React, { Component } from "react";
import "./todo.css";
import PropTypes from "prop-types";

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
      <li onKeyDown={this.handleKeyDown} className="my-8">
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
          className="shadow bg-purple-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-5"
          onClick={() => {
            completeItem(el);
          }}
        >
          Complete
        </button>
        <button
          type="submit"
          id="deleteButton"
          className=" border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded text-red-600 ml-1"
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

ListItem.propTypes = {
  el: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  completeItem: PropTypes.func.isRequired,
};
