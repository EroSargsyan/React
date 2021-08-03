import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./appLayout";
import LandingPage from "./landingPage";
import ProtecteddRoute from "./ProtectedRoute";

export default class Blog extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <ProtecteddRoute component={AppLayout} path="/app" />
        </Switch>
      </Router>
    );
  }
}
