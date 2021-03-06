import React from "react";
import { withRouter } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

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
            marginTop: "10em",
          }}
        >
          <div>
            <h2>Tell us your story</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              type="text"
              name="title"
              placeholder="*Title"
              onChange={(event) => {
                this.setState((prev) => ({ title: event.target.value }));
              }}
              style={{ height: 25, marginTop: 20 }}
            />
            <TextField
              placeholder="*Content"
              multiline
              rows={4}
              name="content"
              onChange={(event) => {
                this.setState((prev) => ({ content: event.target.value }));
              }}
              style={{ height: 25, marginTop: 20, width: "30em" }}
            />

            <Button
              variant="contained"
              color="primary"
              type="button"
              style={{ height: 35, marginTop: "7em" }}
              onClick={() => {
                this.props.createPost({
                  title: this.state.title,
                  content: this.state.content,
                });
                this.props.history.push("/posts");
              }}
            >
              Create Post
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CreatePostPage);
