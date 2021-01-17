import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA } from 'store/actions/types';
import { receiveApiData, saveError } from 'store/actions/actions';
import { fetchData } from 'services/gitHubService';

export function* getRepositories(pageNumber) {
    const pageNumberStringFormat = pageNumber.page?.toString();
    try {
        const repositories = yield call(fetchData, pageNumberStringFormat);
        yield put(receiveApiData(repositories));
    } catch (e) {
        yield put(saveError());
    }
}

export default function* repositoriesSaga() {
    yield takeLatest(REQUEST_API_DATA, getRepositories);
}
