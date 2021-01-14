import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiData } from 'store/actions/actions';

export default function Homepage() {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);

    useEffect(() => {
        dispatch(requestApiData());
    }, []);
    console.log(repositories);

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}
