import { SEARCH, SAVE_SEARCH } from 'store/actions/types';

export const requestSearchValue = (value) => ({ type: SEARCH, value });
export const receiveSearchValue = (data) => ({ type: SAVE_SEARCH, data });
