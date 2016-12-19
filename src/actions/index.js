import { ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT } from '../constants/';

export function transitionByName(name = '', pushState = true) {
    return {
        type: 'TRANSITION_BY_NAME',
        payload: {
            name,
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
