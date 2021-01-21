import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { REQUEST_API_DATA } from 'store/actions/types';
import * as service from 'services/gitHubService';
import repositoriesSaga, { getRepositories } from 'store/sagas/repositoriesSagas';
import { receiveApiData, saveError } from 'store/actions/repositoriesActions';

describe('Fetch repositories from GitHub API', () => {
    const generator = repositoriesSaga();

    it('Should return the las action and call getRepositories', () => {
        expect(generator.next().value).toEqual(takeLatest(REQUEST_API_DATA, getRepositories));
    });

    it('should be done with next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    });
});

describe('saga flow', () => {
    it('should call api and dispatch success action', async () => {
        const response = { repositoty: 'test' };
        const requestRepositories = jest
            .spyOn(service, 'fetchData')
            .mockImplementation(() => Promise.resolve(response));
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getRepositories,
            { page: 1 }
        );

        expect(requestRepositories).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([receiveApiData(response)]);
        requestRepositories.mockClear();
    });

    it('should call api and dispatch error action', async () => {
        const requestRepositories = jest
            .spyOn(service, 'fetchData')
            .mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getRepositories,
            { page: 1 }
        );

        expect(requestRepositories).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([saveError()]);
        requestRepositories.mockClear();
    });
});
