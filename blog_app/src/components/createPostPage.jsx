import React from "react";
import auth from "./authenticate";

export default class createPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      
    };
  }

  titleInput = (event) => {
    this.setState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  contentInput = (event) => {
    this.setState((prevState) => {
      return { ...prevState, content: event.target.value };
    });
  };
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>Tell us your story</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.titleInput}
          />
          <input
            type="textarea"
            name="content"
            value={this.state.content}
            onChange={this.contentInput}
          />
          <input type="button" value="Submit" />
        </div>
        <div>
          <button
            onClick={() => {
              auth.logout(() => {
                this.props.history.push("/");
              });
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}
