import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_LOGIN } from 'store/actions/types';
import { receiveUser } from 'store/actions/authActions';
import { login } from 'services/authService';

export function* getUser(userCredentials) {
    try {
        const userInfo = yield call(login, userCredentials);
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('token', userInfo.token);
        yield put(receiveUser(userInfo));
    } catch (e) {
        //TODO: handle error
        console.log('Invalid  Credentials', e);
    }
}

export default function* authSaga() {
    yield takeLatest(REQUEST_LOGIN, getUser);
}
