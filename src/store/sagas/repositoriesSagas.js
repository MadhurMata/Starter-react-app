import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA } from 'store/actions/types';
import { receiveApiData } from 'store/actions/repositoriesActions';
import { fetchData } from 'services/gitHubService';

export function* getRepositories(pageNumber) {
    const pageNumberStringFormat = pageNumber.page?.toString();
    try {
        const repositories = yield call(fetchData, pageNumberStringFormat);
        yield put(receiveApiData(repositories));
    } catch (e) {
        console.log('Repositories could not be load', e);
        // TODO: handle errors
        // yield put(saveError());
    }
}

export default function* repositoriesSaga() {
    yield takeLatest(REQUEST_API_DATA, getRepositories);
}
