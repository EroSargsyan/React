import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PrimaryPage from "./components/primaryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <PrimaryPage />
      </div>
    </Router>
  );
}

export default App;
