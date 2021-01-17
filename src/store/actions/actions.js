import {
    REQUEST_API_DATA,
    RECEIVE_API_DATA,
    REQUEST_API_DATA_FAILED,
    SEARCH,
    SAVE_SEARCH,
    REQUEST_PAGE_NUMBER,
    RECEIVE_PAGE_NUMBER
} from 'store/actions/types';

export const requestApiData = (page) => ({ type: REQUEST_API_DATA, page });
export const receiveApiData = (data) => ({
    type: RECEIVE_API_DATA,
    data
});

export const saveError = () => ({ type: REQUEST_API_DATA_FAILED });

export const requestSearchValue = (value) => ({ type: SEARCH, value });
export const receiveSearchValue = (data) => ({ type: SAVE_SEARCH, data });

export const requestPageNumber = (page) => ({ type: REQUEST_PAGE_NUMBER, page });
export const receivePageNumber = (data) => ({ type: RECEIVE_PAGE_NUMBER, data });
