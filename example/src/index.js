import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import AppContainer from './containers/';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        document.getElementById('app')
    );
});

