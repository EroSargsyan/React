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
// import SignOut from "./signout";

export default class PrimaryPage extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/createpost">Create Post</NavLink>
          <NavLink to="/login">Log in</NavLink>
          {/* <SignOut/> */}
        </nav>

        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/posts" component={Posts} /> */}
          <ProtectedRoute path="/createpost" component={createPostPage} />
        </Switch>
      </Router>
    );
  }
}
