import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA } from 'store/actions/types';
import { receiveApiData, saveError } from 'store/actions/actions';
import { fetchData } from 'services/gitHubService';

export function* getRepositories() {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
      yield put(saveError());
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getRepositories);
}
