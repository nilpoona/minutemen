import { combineReducers } from 'redux';
import minutemenReducer from '../../../src/reducers/';
import app from './app';

const routing = minutemenReducer(0)

const rootReducer = combineReducers({
    app,
    routing
});
export default rootReducer;

