import { REQUEST_LOGIN, RECEIVE_LOGIN } from 'store/actions/types';

export const requestUser = (user) => ({ type: REQUEST_LOGIN, user });
export const receiveUser = (data) => ({
    type: RECEIVE_LOGIN,
    data
});
