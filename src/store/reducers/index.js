import { combineReducers } from 'redux';
import authReducer from 'store/reducers/authReducer';
import service from 'store/reducers/reducers';

export default combineReducers({
    service,
    authReducer
});
