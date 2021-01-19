import { REQUEST_LOGIN, RECEICE_LOGIN } from 'store/actions/types';

export const requestUser = (user) => ({ type: REQUEST_LOGIN, user });
export const receiveUser = (data) => ({
    type: RECEICE_LOGIN,
    data
});
