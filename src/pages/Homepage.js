import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiData } from 'store/actions/actions';
import 'assets/sass/styles.sass';
import RepositoryCard from 'components/repository/RepositoryCard';
import { daysFromCreatedDate } from 'utils/utils';

export default function Homepage() {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);

    useEffect(() => {
        dispatch(requestApiData());
    }, []);

    return (
        <main>
            {repositories?.map((repository, idx) => (
                <RepositoryCard
                    repositoryName={repository.name}
                    repositoryDescription={repository.description}
                    repositoryIssues={repository.open_issues_count}
                    repositoryStars={repository.stargazers_count}
                    repositoryUserName={repository.owner.login}
                    repositoryAvatar={repository.owner.avatar_url}
                    createdAt={daysFromCreatedDate(repository.created_at)}
                    key={idx}
                />
            ))}
            {repositories.length === 0 && <div className="spinner">Loadinggggggg</div>}
        </main>
    );
}
