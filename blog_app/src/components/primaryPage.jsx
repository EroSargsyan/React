import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import createPostPage from "./createPostPage";
import LoginForm from "./loginForm";
import auth from "./authenticate";
import Posts from "./posts";
import CreatePostPage from "./createPostPage";
// import SignOut from "./signout";

export default class PrimaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      contentValue: "",
      items: [
        {
          id: Math.random(),
          date: new Date().toLocaleDateString(),

          titleValue: "First Title Value",
          contentValue: "First Content Value",
        },
        {
          id: Math.random(),
          date: new Date().toLocaleDateString(),
          titleValue: "Second Title Value",
          contentValue: "Second Content Value",
        },
      ],
    };
  }

  titleContent = (newTitle, newContent) => {
    this.setState((prevState) => {
      return {
        items: [
          ...prevState.items,
          {
            id: Math.random(),
            date: new Date().toLocaleDateString(),
            titleValue: newTitle,
            contentValue: newContent,
          },
        ],
      };
    });
  };

  // contentInput = (newContent) => {
  //   this.setState({ contentValue: newContent });
  // };

  render() {
    return (
      <div>
        {/* <CreatePostPage
          changeTitle={this.titleInput}
          changeContent={this.contentInput}
        />
        <Posts
          title={this.state.titleValue}
          content={this.state.contentValue}
        /> */}

        <Router>
          <nav>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/createpost">Create Post</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </nav>

          <Switch>
            <Route exact path="/" />
            <Route path="/login" component={LoginForm} />
            <Route
              path="/posts"
              render={() => {
                return <Posts items={this.state.items} />;
              }}
            />
            <ProtectedRoute
              path="/createpost"
              component={CreatePostPage}
              changeTitleContent={this.titleContent}
              // changeContent={this.contentInput}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
