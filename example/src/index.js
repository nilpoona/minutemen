import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import AppContainer from './containers/';
import FooContainer from './containers/foo';
import Foo from './components/foo';
import Router from '../../src/components/router';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <AppContainer />
                <FooContainer />
                <Foo />
            </Router>
        </Provider>,
        document.getElementById('app')
    );
});

