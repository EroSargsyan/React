import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PrimaryPage from "./components/primaryPage";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className="App">
          <PrimaryPage />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
