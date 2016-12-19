import { createLogic, createLogicMiddleware } from 'redux-logic';

/**
* create middlewares
* @param {Object} selector - selector
* @param {Object} historywrap - history object wrapper 
* @returns {Object} 
*/
export default function createMinutemen(selector, historyWrap) {
    const validateTransitionByName = createLogic({
        type: 'TRANSITION_BY_NAME',
        latest: true,
        validate({ getState, action }, allow, reject) {
            const routes = selector.getPayloadByName(action.payload.name);
            if (routes === null) {
                reject();
            } else {
                action.payload = {
                    ...action.payload,
                    ...routes
                };
                historyWrap.pushState(action, routes.component, routes.uri);
                allow(action);
            }
        }
    });
    
    return createLogicMiddleware([validateTransitionByName], {});
}
