import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST_PAGE_NUMBER } from 'store/actions/types';
import { receivePageNumber } from 'store/actions/paginationActions';

export function* changePageNumber(pageNumber) {
    try {
        yield put(receivePageNumber(pageNumber));
    } catch (e) {
        console.log('Page could not be load', e);
        // TODO: handle errors
        // yield put(saveError());
    }
}

export default function* paginationSaga() {
    yield takeLatest(REQUEST_PAGE_NUMBER, changePageNumber);
}
