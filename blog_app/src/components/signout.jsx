import React from "react";
import { NavLink } from "react-router-dom";
import auth from "./authenticate";
import "./Styles.css";

let signOut = "signOutHidden";
export default class SignOut extends React.Component {
  render() {
    true ? (signOut = "signOutShow") : (signOut = "signOutHidden");
    return (
      <NavLink className={signOut} to="/">
        Sign Out
      </NavLink>
    );
  }
}
