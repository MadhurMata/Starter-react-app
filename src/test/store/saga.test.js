import { call, put, takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { REQUEST_API_DATA, RECEIVE_API_DATA, REQUEST_API_DATA_FAILED } from 'store/actions/types';
import * as service from 'services/gitHubService';
import mySaga, { getRepositories } from 'store/sagas';
import { receiveApiData, saveError } from 'store/actions/actions';

describe('fetching data flow', () => {
    const generator = mySaga();
    // const error = {}
    // const response = { data: { results: 'whatever' }}

    // it('Makes api request', () => {
    //     expect(generator.next().value).toEqual(call(fetchData));
    // });
    it('bfndkmws', () => {
        expect(generator.next().value).toEqual(takeLatest(REQUEST_API_DATA, getRepositories));
    });

    it('should be done with next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    });

  //   it('Makes api request', () => {
  //     expect(generator.next(response).value).toEqual(takeLatest(RECEIVE_API_DATA, {}));
  // });

    // it('Fetches makes api request', () => {
    //     expect(generator.next()).toEqual({ done: true, value: undefined });
    // });

    // it('Api request fail ', () => {
    //     expect(generator.throw(error).value).toEqual(put(REQUEST_API_DATA_FAILED))
    // });
});


describe('saga flow', () => {

  it('should call api and dispatch success action', async ()  => {
    const response = { repositoty: "test" };
    const requestRepositories = jest.spyOn(service, 'fetchData').mockImplementation(() => Promise.resolve(response));
    const dispatched = [];
    const result = await runSaga({

      dispatch: (action) => dispatched.push(action)
    }, getRepositories);

    expect(requestRepositories).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([receiveApiData(response)]);
    requestRepositories.mockClear();
  });

  it('should call api and dispatch error action', async ()  => {
    const response = { repositoty: "test" };
    const requestRepositories = jest.spyOn(service, 'fetchData').mockImplementation(() => Promise.reject());
    const dispatched = [];
    const result = await runSaga({

      dispatch: (action) => dispatched.push(action)
    }, getRepositories);

    expect(requestRepositories).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([saveError()]);
    requestRepositories.mockClear();
  });


});
