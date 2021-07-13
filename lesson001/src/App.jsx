import React from "react";
import "./App.css";
import Weather from "./components/Weather/Weather.jsx";
import dailyForecasts from "./data/weatherData.jsx";

function App() {
  return (
    <div id="container">
      <Weather weatherPredictions={dailyForecasts} />
    </div>
  );
}

export default App;
