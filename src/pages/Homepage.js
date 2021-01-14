import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiData } from 'store/actions/actions';

export default function Homepage() {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);

    useEffect(() => {
        dispatch(requestApiData());
    }, []);

    return (
        <>
            {repositories?.map((idx) => (
                <h1 key={idx}>Home Page</h1>
            ))}
            {repositories.length === 0 && <div>Loadinggggggg</div>}
        </>
    );
}
