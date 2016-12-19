import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';
import createMinutemen from '../../../src/';
import createHistory from '../../../src/history';
import createSelector from '../../../src/selector';

export default function configureStore(initialState) {
    const mHistory = createHistory(window.history);
    const routing = {
        '/': {
            index: 0,
            component: 'AppContainer'
        },
        '/foo': {
            index: 1,
            component: 'FooContainer'
        }
    };
    const minutemen = createMinutemen(createSelector(routing), mHistory);
    
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            createLogger(),
            minutemen
        )
    );
}
