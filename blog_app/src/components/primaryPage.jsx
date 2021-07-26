import React from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import LoginForm from "./loginForm";
import Posts from "./posts";
import CreatePostPage from "./createPostPage";
import ProtectedRoute from "./protectedRoute";
import EachPost from "./eachPost";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar } from "@material-ui/core";
import ErrorPage from "./errorPage";
// import Comments from "./comments";
// import createPostPage from "./createPostPage";
// import auth from "./authenticate";
// import ProtectedRoute from "./protectedRoute";

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
        <AppBar style={{ height: "4.5em", backgroundColor: "	primary " }}>
          <Toolbar>
            <div>
              <Button variant="contained" color="secondary">
                <Link disableUnderline={true} to="/posts">
                  Posts
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "1em" }}
              >
                <NavLink to="/createpost">Create Post</NavLink>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "85em" }}
              >
                <NavLink to="/login">Log in</NavLink>
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path={["/", "/login"]} component={LoginForm} />

          <Route
            exact
            path="/posts"
            render={() => {
              return <Posts items={this.state.items} />;
            }}
          />

          <ProtectedRoute
            exact
            path="/createpost"
            component={CreatePostPage}
            createPost={this.createPost}
          />
          <Route exact path="/posts/:ide">
            <EachPost items={this.state.items} deleteItem={this.deleteItem} />
            {/* <Comments/> */}
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
