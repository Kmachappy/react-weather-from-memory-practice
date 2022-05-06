import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

// this is destructuring the object prop
const WeatherForecast = ({ img, conditions, time }) => {
  // console.log(img)
  return (
    <div className="weather">
      <WeatherIcon img={img} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;
