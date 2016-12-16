import { createLogic } from 'redux-logic';
import { createLogicMiddleware } from 'redux-logic';

const transitionValidate = createLogic({
    type: 'TRANSITION_TO',
    latest: true,
    validate({ getState, action }, allow, reject) {
        allow(action);
    }
});

/**
* create middlewares
* @param {Object} routing - routing settings
* @returns {Object} 
*/
export default function createMinutemen(routing = {}) {
    const transitionValidate = createLogic({
        type: 'TRANSITION_TO',
        latest: true,
        validate({ getState, action }, allow, reject) {
            allow(action);
        }
    });
    
    return createLogicMiddleware([transitionValidate], {});
}
