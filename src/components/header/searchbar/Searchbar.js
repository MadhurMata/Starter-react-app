import React, { useState } from 'react';

export default function Searchbar() {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        setSearch(e.target.value);
    };
    return (
        <input
            className="searchbar"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSubmit}
        />
    );
}
