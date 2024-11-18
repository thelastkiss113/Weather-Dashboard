import React, { useEffect, useState } from 'react';

export const SearchHistory = ({ onSelectCity }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(storedHistory);
  }, []);

  const handleCityClick = (city) => {
    onSelectCity(city);
  };

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};
