import { REQUEST_API_DATA, RECEIVE_API_DATA, REQUEST_API_DATA_FAILED } from 'store/actions/types';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });

export const saveError = () => ({ type: REQUEST_API_DATA_FAILED });
