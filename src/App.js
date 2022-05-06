import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./component/WeatherForecast";

console.log(weatherData);

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weatherData.map((element, index) => {
          return <WeatherForecast {...element} key={index} />;
        })}
      </section>
    </div>
  );
}
