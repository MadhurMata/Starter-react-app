import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST_PAGE_NUMBER } from 'store/actions/types';
import { receivePageNumber, saveError } from 'store/actions/actions';

export function* changePageNumber(pageNumber) {
    try {
        yield put(receivePageNumber(pageNumber));
    } catch (e) {
        yield put(saveError());
    }
}

export default function* paginationSaga() {
    yield takeLatest(REQUEST_PAGE_NUMBER, changePageNumber);
}
