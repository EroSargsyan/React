import React from "react";
import Posts from "./posts";
import auth from "./authenticate";
import { Route } from "react-router-dom";

export default class CreatePostPage extends React.Component {
  // titleInput = (event) => {
  //   this.setState((prevState) => {
  //     return { ...prevState, titleValue: event.target.value };
  //   });
  // };
  // contentInput = (event) => {
  //   this.setState((prevState) => {
  //     return { ...prevState, contentValue: event.target.value };
  //   });
  // };

  // changeTitle = (event) => {
  //   this.props.changeTitle(event.target.value);
  // };
  // changeContent = (event) => {
  //   this.props.changeContent(event.target.value);
  // };

  // changeTitleContent = () => {
  //   this.props.changeTitleContent(this.state.title, this.state.content);
  // };

  render() {
    return (
      <>
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
              // value={this.state.title}
              onChange={(event) => {
                this.props.changeTitleContent(event.target.value);
              }}
            />
            <input
              type="textarea"
              name="content"
              // value={this.state.content}
              onChange={(event) => {
                // this.props.changeTitleContent("", event.target.value);
              }}
            />
            <input
              type="button"
              value="Submit"
              onClick={() => {
                // this.props.history.push("/props")
              }}
            />
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
      </>
    );
  }
}
