import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";

function App() {
  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        Coded by Carina Easley-Appleyard and
        <a
          href="https://github.com/carinaroseapple/react-weather-app.git"
          target="_blank"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
