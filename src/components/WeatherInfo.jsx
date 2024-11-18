import React from "react";

/**
 * A component that displays the temperature in both Celsius and Fahrenheit.
 */
const WeatherInfo = ({ temperatureCelsius }) => {
  /**
   * Converts temperature from Celsius to Fahrenheit.
   * @param {number} temperatureCelsius - the temperature in Celsius.
   * @returns {number} The temperature in Fahrenheit.
   */
  const celsiusToFahrenheit = (temperatureCelsius) => {
    return (temperatureCelsius * 9/5) + 32;
  };

  return (
    <div className="weather-info">
      <h2>
        {temperatureCelsius}°C / {celsiusToFahrenheit(temperatureCelsius).toFixed(1)}°F
      </h2>
    </div>
  );
};


export default WeatherInfo;
