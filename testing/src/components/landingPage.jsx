import React from "react";
import auth from "./auth";

export default function LandingPage(props) {
  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center", fontSize: 30 }}>
        <p>Protected page example</p>
      </div>
      <div>
        <button
          onClick={() => {
            auth.login(() => {
              props.history.push("/app");
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
