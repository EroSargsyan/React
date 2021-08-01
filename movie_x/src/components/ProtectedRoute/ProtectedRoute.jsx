import React from "react";
import { Redirect, Route } from "react-router-dom";
import Primary from "../ParimaryPage/Primary";

export default function ProtectedRoute() {
  return (
    <Route
      render={(props) =>
        this.props.isAuth ? (
          <Primary {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
