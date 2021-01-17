import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestSearchValue } from 'store/actions/actions';

export default function Searchbar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        search.length > 0 ? dispatch(requestSearchValue(search.toLowerCase())) : null;
    }, [search]);

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
