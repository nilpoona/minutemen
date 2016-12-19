import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import AppContainer from './containers/';
import FooContainer from './containers/foo';
import Foo from './components/foo';
import Router from '../../src/components/router';
import createHistory from '../../src/history';

document.addEventListener("DOMContentLoaded", () => {
    const historyWrapper = createHistory();
    const store = configureStore(undefined, historyWrapper);
    ReactDOM.render(
        <Provider store={store}>
            <Router historyWrapper={historyWrapper}>
                <AppContainer />
                <FooContainer />
                <Foo />
            </Router>
        </Provider>,
        document.getElementById('app')
    );
});

