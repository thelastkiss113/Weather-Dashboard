import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const weather = useSelector((state) => state.weather.data);
    const status = useSelector((state) => state.weather.status);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to fetch data.</p>;
    if (!weather) return <p>No data to display.</p>;

    return (
        <div>
            <h1>{weather.name}</h1>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
