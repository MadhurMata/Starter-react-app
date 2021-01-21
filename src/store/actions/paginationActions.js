import { REQUEST_PAGE_NUMBER, RECEIVE_PAGE_NUMBER } from 'store/actions/types';

export const requestPageNumber = (page) => ({ type: REQUEST_PAGE_NUMBER, page });
export const receivePageNumber = (data) => ({ type: RECEIVE_PAGE_NUMBER, data });
