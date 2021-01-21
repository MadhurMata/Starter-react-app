import { REQUEST_LOGIN, RECEIVE_LOGIN } from 'store/actions/types';

export const requestUser = (userCredentials) => ({ type: REQUEST_LOGIN, userCredentials });
export const receiveUser = (data) => ({ type: RECEIVE_LOGIN, data });
