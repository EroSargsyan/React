import React from "react";
import ImportLists from "./ImportLists";
import { getStorage, setStorage } from "../helpers/localStorage";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: !getStorage() ? [] : getStorage(),
    };
  }

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handlerAdd = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== "") {
      this.setState((prevState) => {
        return {
          items: [
            ...prevState.items,
            {
              id: Math.random(),
              textValue: this.state.inputValue,
              isCompleted: false,
              className: "",
            },
          ],

          inputValue: "",
        };
      });
    }
  };

  componentDidUpdate() {
    setStorage(this.state.items);
  }

  deleteItem = (el) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== el.id),
    }));
  };

  completeItem = (el) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => {
        if (item.id === el.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      }),
    }));
  };

  changeValue = (id, text) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            textValue: text,
            isCompleted: false,
            className: "",
          };
        }
        return item;
      }),
    }));
  };

  render() {
    return (
      <div id="container" className="flex justify-center flex-col">
        <div id="inputContainer">
          <form>
            <p id="todo" className="text-4xl text-center mb-8 mr-8  ">
              To Do
            </p>
            <input
              id="input"
              type="text"
              onChange={this.onChange}
              className="bg-gray-200  border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
              value={this.state.inputValue}
              placeholder="Enter task"
            />
            <input
              id="add"
              type="submit"
              value="Add"
              onClick={this.handlerAdd}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-3"
            />
          </form>
        </div>

        <ul id="cardContainer" className="my-3.5">
          <ImportLists
            items={this.state.items}
            deleteItem={this.deleteItem}
            completeItem={this.completeItem}
            changeValue={this.changeValue}
          />
        </ul>
      </div>
    );
  }
}
