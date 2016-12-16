import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';
import createMinutemen from '../../../src/';

export default function configureStore(initialState) {
    const minutemen = createMinutemen();
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            createLogger(),
            minutemen
        )
    );
}
