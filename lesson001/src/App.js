import "./App.css";
import Weather from "./components/Weather/Weather.jsx";
import dailyForecasts from "./data/weatherData";
function App(props) {
  return (
    <div id="container">
      <Weather weatherPredictions={dailyForecasts} />
    </div>
  );
}

export default App;
