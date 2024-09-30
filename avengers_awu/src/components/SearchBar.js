import React, { useState } from 'react';
import './style/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="search-input"
            />
            <button className="search-button">SEARCH</button>
        </div>
    );
};

export default SearchBar;
