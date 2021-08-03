import React from "react";
import auth from "./auth";

export default function AppLayout(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", fontSize: 30 }}>
        <p>App Layout</p>
      </div>
      <div>
        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
