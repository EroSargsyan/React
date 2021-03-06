import React from "react";
import { Redirect, Route } from "react-router-dom";
import Primary from "../PrimaryPage/Primary";

export default function ProtectedRoute() {
  return (
    <Route
      render={(props) =>
        localStorage.getItem("auth") ? (
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
