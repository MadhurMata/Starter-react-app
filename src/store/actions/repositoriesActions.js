import { REQUEST_API_DATA, RECEIVE_API_DATA } from 'store/actions/types';

export const requestApiData = (page) => ({ type: REQUEST_API_DATA, page });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
