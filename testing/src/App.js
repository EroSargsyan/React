import React from "react";
import ReactDOM from "react-dom";

// import logo from "./logo.svg";
// import "./App.css";

const weatherInfo = [
  {
    weekDay: "Monday",
    imgURL: "/icon/sunny.svg",
    temp: "36C",
  },
  {
    weekDay: "Tuesday",
    imgURL: "/icon/partialSunny.svg",
    temp: "32C",
  },
  {
    weekDay: "Wednesday",
    imgURL: "/icon/rainy.svg",
    temp: "35C",
  },
  {
    weekDay: "Thursday",
    imgURL: "/icon/rainy.svg",
    temp: "45C",
  },
  {
    weekDay: "Friday",
    imgURL: "/icon/rainy.svg",
    temp: "36C",
  },
  {
    weekDay: "Saturday",
    imgURL: "/icon/sunny.svg",
    temp: "37C",
  },
  {
    weekDay: "Sunday",
    imgURL: "/icon/mostlyRainy.svg",
    temp: "39C",
  },
];


// class Weather extends React.Component {
//   render() {
//     return <div id="mapped">{mapped}</div>;
//   }
// }


function Weather() {

}
// ReactDOM.render(<Weather />, document.getElementById("root"));

function App() {
  weatherInfo.map((el) => {
    return (
      <div id="container">
        <div id="weekDay"> {el.weekDay} </div>
        <div id="img">
          <img src={el.imgURL} alt="weather" />
        </div>
        <div id="temp"> {el.temp} </div>
      </div>
    );
  });
}

export default App;
