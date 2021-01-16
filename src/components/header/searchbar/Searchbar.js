import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'store/actions/actions';

export default function Searchbar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        search ? dispatch(setSearchValue(search)) : null;
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
