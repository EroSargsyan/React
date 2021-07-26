import React from "react";
// import Posts from "./posts";
import auth from "./authenticate";
import { withRouter } from "react-router-dom";

class CreatePostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

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
                this.setState((prev) => ({ title: event.target.value }));
              }}
            />
            <input
              type="textarea"
              name="content"
              // value={this.state.content}
              onChange={(event) => {
                this.setState((prev) => ({ content: event.target.value }));
              }}
            />
            <input
              type="button"
              value="Submit"
              onClick={() => {
                this.props.createPost({
                  title: this.state.title,
                  content: this.state.content,
                });
                this.props.history.push("/posts");
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                auth.logout(() => {
                  this.props.history.push("/posts");
                });
                window.localStorage.removeItem("login");
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

export default withRouter(CreatePostPage);
