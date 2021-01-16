import {
    REQUEST_API_DATA,
    RECEIVE_API_DATA,
    REQUEST_API_DATA_FAILED,
    SEARCH,
    SAVE_SEARCH
} from 'store/actions/types';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });

export const saveError = () => ({ type: REQUEST_API_DATA_FAILED });

export const setSearchValue = (value) => ({ type: SEARCH, value });
export const saveSearch = (data) => ({ type: SAVE_SEARCH, data });
