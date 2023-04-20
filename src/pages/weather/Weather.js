import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export const Weather = () => {
  // useState
  const [weatherData, setWeatherData] = useState({});
  const [weatherLocation, setWeatherLocation] = useState("");

  // API FETCH(AXIOS)
  const apiKey = "a2c9494a5c66ec8aee4ec8fab63f3e01";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}&units=metric`;

  const fetchData = () => {
    axios.get(url).then((res) => {
      setWeatherData(res.data);
      console.log(res.data);
    });
  };

  // CLICK "ENTER" EVENT LISTENER
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      fetchData();
      setWeatherLocation("");
    }
  };

  return (
    <div className="weather">
      <div className="container">
        <input
          value={weatherLocation}
          onChange={(e) => setWeatherLocation(e.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Enter Location"
        />
        <div className="upper-part">
          <div>
            {weatherData.name ? (
              <h1 className="name">
                {weatherData.name} {weatherData.sys.country}
              </h1>
            ) : null}
          </div>
          <div>
            {weatherData.main ? (
              <p className="measure current">
                {weatherData.main.feels_like.toFixed()}&deg;
              </p>
            ) : null}
          </div>
        </div>
        <div className="mid">
          <div>
            {weatherData.main ? (
              <p className="measure wholeday">
                {weatherData.main.temp_min.toFixed()}&deg; -{" "}
                {weatherData.main.temp_max.toFixed()}&deg;
              </p>
            ) : null}
          </div>
        </div>
        <div className="down-part">
          <div>
            <p className="highlight">Humidity</p>
            {weatherData.main ? <p>{weatherData.main.humidity}%</p> : null}
          </div>
          <div>
            <p className="highlight">Wind</p>
            {weatherData.wind ? (
              <p>{weatherData.wind.speed.toFixed()} KpH</p>
            ) : null}
          </div>
          <div>
            <p className="highlight">Condition</p>
            {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
