import { call, put, takeEvery, takeLatest, fork, all } from 'redux-saga/effects';

import { REQUEST_API_DATA, REQUEST_PAGE_NUMBER, SEARCH } from 'store/actions/types';
import { receiveApiData, receivePageNumber, saveError, saveSearch } from 'store/actions/actions';
import { fetchData } from 'services/gitHubService';

export function* getRepositories(pageNumber) {
    const pageNumberStringFormat = pageNumber.page.toString();
    try {
        const repositories = yield call(fetchData, pageNumberStringFormat);
        yield put(receiveApiData(repositories));
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

export function* changePageNumber(pageNumber) {
    try {
        yield put(receivePageNumber(pageNumber));
    } catch (e) {
        yield put(saveError());
    }
}

export function* pageNumberSaga() {
    yield takeLatest(REQUEST_PAGE_NUMBER, changePageNumber);
}

export function* searchSaga() {
    yield takeEvery(SEARCH, searchRepository);
}

export default function* rootSaga() {
    yield all([fork(repositopriesSaga), fork(searchSaga), fork(pageNumberSaga)]);
}
