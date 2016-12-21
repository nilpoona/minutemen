import { TRANSITON_TO_ROOT_COMPONENT } from './constants/';

export default function createHistory(root = '/') {

    const pushState = (stateObj = {}, componentName, path) => {
        window.history.pushState(stateObj, componentName, path);
    };

    const pathname = () => {
        return window.location.pathname;
    };

    const handlePopstate = (e, cb) => {
        if (e.state === null || e.state.hasOwnProperty('name')) {
            cb(TRANSITON_TO_ROOT_COMPONENT);
        } else {
            cb(e.state.payload.name, e.state.payload.params);
        }
    };

    const replaceState = (stateObj = {}, componentName, path) => {
        window.history.replaceState(stateObj, componentName, path);
    };

    const listenPopstate = (cb) => {
        window.addEventListener('popstate', e => handlePopstate(e, cb));
    };

    return {
        pushState: pushState,
        listenPopstate: listenPopstate,
        replaceState: replaceState,
        pathname: pathname,
    };
}
