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
import "./Styles.css";
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
      items: prevState.items.filter((el) => el.id !== target),
    }));
  };
  editItem = (target, newTitle, newContent) => {
    const data = this.state.items.map((el) => {
      return el.id === Number(target)
        ? {
            ...el,
            titleValue: newTitle,
            contentValue: newContent,
          }
        : el;
    });

    this.setState({
      items: data,
      titleValue: data.titleValue,
      contentValue: data.newContent,
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <AppBar
          style={{
            height: "4.5em",
            backgroundColor: "	primary ",
          }}
        >
          <Toolbar id="buttonContainer">
            <div id="buttonDiv">
              <NavLink to="/posts" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary">
                  Posts
                </Button>
              </NavLink>

              <NavLink to="/createpost" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ left: "3em" }}
                >
                  Create Post
                </Button>
              </NavLink>

              <NavLink to="/login" style={{ textDecoration: "none" }}>
                
                <Button
                  variant="contained"
                  color="secondary"
                  id="login"
                  style={{ left: "85em" }}
                >
                  Log in
                </Button>
              </NavLink>
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
            <EachPost
              items={this.state.items}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
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
