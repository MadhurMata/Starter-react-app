import { put, takeEvery } from 'redux-saga/effects';

import { SEARCH } from 'store/actions/types';
import { receiveSearchValue } from 'store/actions/searchActions';

export function* searchRepository(searchValue) {
    try {
        yield put(receiveSearchValue(searchValue));
    } catch (e) {
        console.log('Serch could not be done', e);
        // TODO: handle errors
        // yield put(saveError());
    }
}

export default function* searchSaga() {
    yield takeEvery(SEARCH, searchRepository);
}
