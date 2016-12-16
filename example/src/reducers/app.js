import { handleActions } from 'redux-actions';

export const initialState = {
    state: ''
};

const app = handleActions({

    'CHANGE_STATE': (state) => {
        return state;
    }

}, initialState);

export default app;
