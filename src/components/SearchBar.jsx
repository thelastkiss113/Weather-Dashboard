import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

/**
 * A SearchBar component that allows the user to search for the weather in a particular city.
 */
const SearchBar = () => {
    /**
     * The city that the user is currently searching for.
     */
    const [city, setCity] = useState('');
    /**
     * The useDispatch hook from the react-redux library, which allows us to dispatch actions to the store.
     */
    const dispatch = useDispatch();

    /**
     * Handles the user's search request. If the city is not empty, it dispatches a fetchWeather action to the store.
     */
    const handleSearch = () => {
        if (city) dispatch(fetchWeather(city));
    };

    return (
        <div>
            {
                /**
                 * A text input element that allows the user to input a city name.
                 */
            }
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            {
                /**
                 * A button element that triggers the handleSearch function when clicked.
                 */
            }
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
