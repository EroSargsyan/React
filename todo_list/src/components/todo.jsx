import React from "react";
import ImportLists from "./ImportLists";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: [
        {
          id: Math.random(),
          textValue: "Java Script",
          isCompleted: false,
          className: "",
        },
        {
          id: Math.random(),
          textValue: "Node JS",
          isCompleted: false,
          className: "",
        },
        {
          id: Math.random(),
          textValue: "React",
          isCompleted: false,
          className: "",
        },
      ],
    };
  }

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handlerAdd = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== "") {
      this.setState((prevState) => ({
        items: [
          ...prevState.items,
          {
            id: Math.random(),
            textValue: this.state.inputValue,
            isCompleted: false,
            className: "",
          },
        ],
      }));
    }
  };

  deleteItem = (el) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== el.id),
    }));
  };

  completeItem = (el) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => {
        if (item.id === el.id && item.className === "") {
          return { ...item, className: "lineThrough", isCompleted: true };
        } else if (item.id === el.id && item.className !== "") {
          return { ...item, className: "", isCompleted: false };
        }

        return item;
      }),
    }));
  };

  render() {
    return (
      <>
        <div id="container">
          <span id="todo">To Do</span>
          <form>
            <input id="input" type="text" onChange={this.onChange} />
            <input
              id="add"
              type="submit"
              value="Add"
              onClick={this.handlerAdd}
            />
          </form>
        </div>

        <ul id="cardContainer">
          <ImportLists
            items={this.state.items}
            deleteItem={this.deleteItem}
            completeItem={this.completeItem}
          />
        </ul>
      </>
    );
  }
}
