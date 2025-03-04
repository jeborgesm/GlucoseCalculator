import React from 'react';

const FoodSearch = ({ searchQuery, setSearchQuery }) => (
    <div className="form-group">
        <label>Search</label>
        <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
);

export default FoodSearch;