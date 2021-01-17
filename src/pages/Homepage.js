import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestApiData } from 'store/actions/actions';
import 'assets/sass/styles.sass';
import RepositoryCard from 'components/repository/RepositoryCard';
import Header from 'parts/header/Header';
import Footer from 'parts/footer/Footer';
import { daysFromCreatedDate } from 'utils/utils';
import moment from 'moment';

export default function Homepage() {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);
    const searchValue = useSelector((state) => state.search.value);
    const currentPageNumber = useSelector((state) => state.pageNumber);
    const todaysDate = moment(new Date());

    useEffect(() => {
        dispatch(requestApiData(currentPageNumber));
    }, [currentPageNumber]);

    const filterRepositories = () => {
        return searchValue
            ? repositories?.filter((repository) =>
                  repository.name.toLowerCase().includes(searchValue)
              )
            : repositories;
    };
    return (
        <>
            <Header />
            <main>
                {filterRepositories()?.map((repository, idx) => (
                    <RepositoryCard
                        repositoryName={repository.name}
                        repositoryDescription={repository.description}
                        repositoryIssues={repository.open_issues_count}
                        repositoryStars={repository.stargazers_count}
                        repositoryUserName={repository.owner.login}
                        repositoryAvatar={repository.owner.avatar_url}
                        createdAt={daysFromCreatedDate(repository.created_at, todaysDate)}
                        key={idx}
                    />
                ))}
                {repositories?.length === 0 && <div className="spinner">Loadinggggggg</div>}
            </main>
            <Footer />
        </>
    );
}
