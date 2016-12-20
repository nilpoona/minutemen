import { ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT } from '../constants/';

export function transitionByName(name = '', params = null, pushState = true) {
    return {
        type: 'TRANSITION_BY_NAME',
        payload: {
            name,
            params,
            pushState,
        }
    };
}

export function transitionToRootComponent(pushState = true) {
    return {
        type: ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT,
        payload: {
            pushState
        }
    };
}
