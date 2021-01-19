import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_LOGIN } from 'store/actions/types';
import { receiveUser } from 'store/actions/actionsLogin';
import { login } from 'services/authService';

export function* getUser(user) {
    try {
        const userInfo = yield call(login, user);
        yield put(receiveUser(userInfo));
    } catch (e) {
        //TODO: handle error
        console.log('Invalid  Credentials', e);
    }
}

export default function* authSaga() {
    yield takeLatest(REQUEST_LOGIN, getUser);
}
