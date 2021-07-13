function Weather(props) {
  return props.weatherPredictions.map((el) => {
    return (
      <div id="box">
        <div id="weekDay"> {el.weekDay} </div>
        <div id="img">
          <img src={el.imgURL} alt="weather" />
        </div>
        <div id="temp"> {el.temp} </div>
      </div>
    );
  });
}

export default Weather;
