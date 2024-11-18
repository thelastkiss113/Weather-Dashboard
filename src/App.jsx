import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
    return (
        <div>
            <h1>Weather Dashboard</h1>
            <SearchBar />
            <WeatherDisplay />
        </div>
    );
};

export default App;
