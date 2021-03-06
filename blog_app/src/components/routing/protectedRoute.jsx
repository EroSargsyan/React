import React from "react";
import { Route, Redirect } from "react-router-dom";


export default function ProtectedRoute({
  component: Component,
  createPost,
  path,
}) {
  const isAuth = window.localStorage.getItem("authentificate");

  return (
    <Route
      path={path}
      render={(props) => {
        if (isAuth) {
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
