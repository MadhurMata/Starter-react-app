import { put, takeEvery } from 'redux-saga/effects';

import { SEARCH } from 'store/actions/types';
import { saveError, receiveSearchValue } from 'store/actions/actions';

export function* searchRepository(searchValue) {
    try {
        yield put(receiveSearchValue(searchValue));
    } catch (e) {
        yield put(saveError());
    }
}

export default function* searchSaga() {
    yield takeEvery(SEARCH, searchRepository);
}
