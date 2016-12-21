import { TRANSITON_TO_ROOT_COMPONENT, TRANSITON_TO } from '../constants/';

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
        type: TRANSITON_TO_ROOT_COMPONENT,
        payload: {
            pushState
        }
    };
}

export function transitionTo(uri, pushState = true) {
    return {
        type: TRANSITON_TO,
        payload: {
            uri,
            pushState,
        }
    };
}
