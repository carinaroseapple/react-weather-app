import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";

function App() {
  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
