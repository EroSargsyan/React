import "./App.css";
import Primary from "./components/ParimaryPage/Primary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="LoginForm">
              <LoginForm />
            </div>
          </Route>
          <Route exact path="/movies">
            <div className="PrimaryPage">
              <Primary />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
