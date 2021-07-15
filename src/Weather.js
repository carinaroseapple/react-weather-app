import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4e9ba2aaf51b6c12486ee31333bf45cc";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;
    console.log(apiURL);
    axios.get(apiURL).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <button type="submit" value="Search">
        {" "}
        Search{" "}
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div class="searchList">
        {form}
        <ul>
          <li>
            <strong>{City}</strong>
          </li>
          <li>Temperature: {Math.round(weather.temperature)} °C.</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
