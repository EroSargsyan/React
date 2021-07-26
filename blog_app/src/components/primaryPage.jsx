import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import ProtectedRoute from "./protectedRoute";
// import createPostPage from "./createPostPage";
import LoginForm from "./loginForm";
// import auth from "./authenticate";
import Posts from "./posts";
import CreatePostPage from "./createPostPage";
import ProtectedRoute from "./protectedRoute";
import EachPost from "./eachPost";
// import Comments from "./comments";

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
            id: Math.floor(Math.random() * 1000),
            date: new Date().toLocaleDateString(),
            titleValue: val.title,
            contentValue: val.content,
            login: window.localStorage.getItem("login"),
          },
        ],
      };
    });
  };
  deleteItem = (target) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((el) => el.id != target),
    }));
  };
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/createpost">Create Post</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </nav>

        <Switch>
          <Route path="/login" component={LoginForm} />

          <Route
            exact
            path="/posts"
            render={() => {
              return <Posts items={this.state.items} />;
            }}
          />

          <ProtectedRoute
            path="/createpost"
            component={CreatePostPage}
            createPost={this.createPost}
          />
          <Route exact path="/posts/:ide">
            <EachPost items={this.state.items} deleteItem={this.deleteItem} />
            {/* <Comments/> */}
          </Route>
        </Switch>
      </div>
    );
  }
}
