import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA } from 'store/actions/types';
import { receiveApiData } from 'store/actions/actions';
import { fetchData } from 'services/service';

function* getRepositories() {
    try {
        const data = yield call(fetchData);
        console.log(data);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getRepositories);
}
