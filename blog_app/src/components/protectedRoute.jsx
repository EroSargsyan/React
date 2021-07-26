import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./authenticate";

export default function ProtectedRoute({
  component: Component,
  createPost,
  path,
}) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component createPost={createPost} />;
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
