import { combineReducers } from 'redux';
import minutemenReducer from '../../../src/reducers/';
import app from './app';

const mReducer = minutemenReducer()

const rootReducer = combineReducers({
    app,
    mReducer
});
export default rootReducer;

