import { ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT } from './constants/';

export default function createHistory(root = '/') {

    const pushState = (stateObj = {}, componentName, path) => {
        window.history.pushState(stateObj, componentName, path);
    };

    const handlePopstate = (e, cb) => {
        if (e.state === null) {
            cb(ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT);
        } else {
            cb(e.state.payload.name);
        }
    };

    const listenPopstate = (cb) => {
        window.addEventListener('popstate', e => handlePopstate(e, cb));
    };

    return {
        pushState: pushState,
        listenPopstate: listenPopstate
    };
}
