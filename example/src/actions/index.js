export function changeState() {
    return {
        type: 'CHANGE_STATE',
        payload: {
            state: 'add'
        }
    };
}
