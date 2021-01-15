import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiData } from 'store/actions/actions';
import 'assets/sass/styles.sass';
import RepositoryCard from 'components/RepositoryCard';

export default function Homepage() {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);

    useEffect(() => {
        dispatch(requestApiData());
    }, []);

    return (
        <>
            {repositories?.map((idx) => (
                <RepositoryCard key={idx} />
            ))}
            {repositories.length === 0 && <div className="spinner">Loadinggggggg</div>}
        </>
    );
}
