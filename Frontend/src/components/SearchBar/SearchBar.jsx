// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search products" />
      <button>
        <i className="search-icon">&#128269;</i>
      </button>
    </div>
  );
};

export default SearchBar;
