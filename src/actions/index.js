export function transitionTo() {
    return {
        type: 'TRANSITION_TO',
        payload: {
            uri: '/'
        }
    };
}
