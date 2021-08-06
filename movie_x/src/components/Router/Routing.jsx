import { Route, Switch } from "react-router-dom";
import Details from "../Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import Favorites from "../Favorites/Favorites";
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
      <Route exact path="/movies/:ID">
        <Details />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}
