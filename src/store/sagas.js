import { call, put, takeEvery, takeLatest, fork, all } from 'redux-saga/effects';

import { REQUEST_API_DATA, SEARCH } from 'store/actions/types';
import { receiveApiData, saveError, saveSearch } from 'store/actions/actions';
import { fetchData } from 'services/gitHubService';

export function* getRepositories() {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        yield put(saveError());
    }
}

export function* repositopriesSaga() {
    yield takeLatest(REQUEST_API_DATA, getRepositories);
}

export function* searchRepository(searchValue) {
    try {
        yield put(saveSearch(searchValue));
    } catch (e) {
        yield put(saveError());
    }
}

export function* searchSaga() {
    yield takeEvery(SEARCH, searchRepository);
}

export default function* rootSaga() {
    yield all([fork(repositopriesSaga), fork(searchSaga)]);
}
