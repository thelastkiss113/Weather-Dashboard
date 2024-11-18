// src/components/SearchHistory.jsx
import React from 'react';

/**
 * SearchHistory component displays a list of previously searched cities.
 */
const SearchHistory = ({ history, onHistoryClick }) => {
  return (
    <div className="search-history">
      {/* Header for the search history section */}
      <h3>Search History</h3>
      
      {/* Unordered list to display the history of searched cities */}
      <ul>
        {history.map((city, index) => (
          // List item representing each city in the search history
          <li key={index} onClick={() => onHistoryClick(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Default export of the component
export default SearchHistory;
