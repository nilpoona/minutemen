export function transitionByName(name = '') {
    return {
        type: 'TRANSITION_BY_NAME',
        payload: {
            name
        }
    };
}
