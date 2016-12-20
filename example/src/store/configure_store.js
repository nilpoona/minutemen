import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';
import createMinutemen from '../../../src/';
import createSelector from '../../../src/selector';

export default function configureStore(initialState, historyWrapper) {
    const routing = {
        '/': {
            index: 0,
            root: true,
            component: 'AppContainer'
        },
        '/foo': {
            index: 1,
            component: 'FooContainer'
        },
        '/bar/:id:/:num:/': {
            index: 2,
            component: 'BarContainer'
        }
    };

    const minutemen = createMinutemen(createSelector(routing), historyWrapper);
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            createLogger(),
            minutemen
        )
    );
}
