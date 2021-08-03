import { Route, Switch } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route exact path="/movies">
        <ProtectedRoute />
      </Route>
    </Switch>
  );
}
