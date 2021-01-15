import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { REQUEST_API_DATA } from 'store/actions/types';
import * as service from 'services/gitHubService';
import mySaga, { getRepositories } from 'store/sagas';
import { receiveApiData, saveError } from 'store/actions/actions';

describe('fetching data flow', () => {
    const generator = mySaga();

    it('bfndkmws', () => {
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
            getRepositories
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
            getRepositories
        );

        expect(requestRepositories).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([saveError()]);
        requestRepositories.mockClear();
    });
});
