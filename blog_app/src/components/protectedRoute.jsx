import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  Route,
  //   NavLink,
  Redirect,
} from "react-router-dom";
// import createPostPage from "./createPostPage";
// import LoginForm from "./loginForm";
import auth from "./authenticate";

export default function ProtectedRoute({
  component: Component,
  changeTitle,
  changeContent,
  path,
}) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return (
            <Component
              changeTitle={changeTitle}
              changeContent={changeContent}
            />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
