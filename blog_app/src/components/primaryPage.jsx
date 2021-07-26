import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
// import ProtectedRoute from "./protectedRoute";
// import createPostPage from "./createPostPage";
import LoginForm from "./loginForm";
// import auth from "./authenticate";
import Posts from "./posts";
import CreatePostPage from "./createPostPage";
import ProtectedRoute from "./protectedRoute";

export default class PrimaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      contentValue: "",
      items: [],
    };
  }

  createPost = (val) => {
    this.setState((prevState) => {
      return {
        items: [
          ...prevState.items,
          {
            id: Math.random(),
            date: new Date().toLocaleDateString(),
            titleValue: val.title,
            contentValue: val.content,
            login: window.localStorage.getItem("login"),
          },
        ],
      };
    });
  };

  render() {
    return (
      <Router>
        <div>
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
            {/* <Route exact path="/createpost">
              <CreatePostPage createPost={this.createPost} />
            </Route> */}
            <ProtectedRoute
              path="/createpost"
              component={CreatePostPage}
              createPost={this.createPost}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
