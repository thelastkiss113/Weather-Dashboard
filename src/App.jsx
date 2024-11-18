import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faCloud, faBolt, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import SoundCloudPlayer from "./components/SoundCloudPlayer"; 
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
  // State variables
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState(() => {
    // Retrieve search history from localStorage
    const storedHistory = localStorage.getItem("searchHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  // Fetches weather data for the given city
  const fetchWeather = async () => {
    try {
      // Make API call to OpenWeatherMap
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e7a8a5b0d8e2cd1bc20d1f4d0b15dd62`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);

      // Update search history
      const updatedHistory = [city, ...history].slice(0, 5); // Keep only the latest 5 cities
      setHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    } catch (error) {
      alert("Error fetching weather data. Please try again.");
    }
  };

  // Handles a click on the search history
  const handleHistoryClick = (city) => {
    setCity(city);
    fetchWeather();
  };

  // Returns the icon for the given weather condition
  const getWeatherIcon = (condition) => {
    // Cloud, sun, thunderstorm, snowflake, or default (cloud)
    if (condition.includes("cloud")) return faCloud;
    if (condition.includes("sun") || condition.includes("clear")) return faSun;
    if (condition.includes("thunder")) return faBolt;
    if (condition.includes("snow")) return faSnowflake;
    return faCloud; 
  };

  return (
    <div className="weather-dashboard">
      <h1>Cyberwave Weather </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
      </div>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <FontAwesomeIcon
            icon={getWeatherIcon(weather.weather[0].main.toLowerCase())}
            className="icon"
            size="4x"
          />
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      <div className="search-history">
        <h3>Search History</h3>
        <ul>
          {history.map((city, index) => (
            <li key={index} onClick={() => handleHistoryClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
      <SoundCloudPlayer />
    </div>
  );
};

export default App;
