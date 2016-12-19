import { createLogic, createLogicMiddleware } from 'redux-logic';
import { ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT } from './constants/';

/**
* create middlewares
* @param {Object} selector - selector
* @param {Object} historywrap - history object wrapper 
* @returns {Object} 
*/
export default function createMinutemen(selector, historyWrap) {
    const pushState = (state, name, uri) => {
        historyWrap.pushState(state, name, uri);
    };

    const validateTransitionByName = createLogic({
        type: 'TRANSITION_BY_NAME',
        latest: true,
        validate({ getState, action }, allow, reject) {
            const routes = selector.getPayloadByName(action.payload.name);
            console.log(routes);
            if (routes === null) {
                reject();
            } else {
                action.payload = {
                    ...action.payload,
                    ...routes
                };

                pushState(action, routes.component, routes.uri);
                allow(action);
            }
        }
    });

    const validateTransitionToRootComponent = createLogic({
        type: ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT,
        latest: true,
        validate({ getState, action }, allow, reject) {
            const routes = selector.rootComponent;
            console.log(routes);
            if (routes === null) {
                reject();
            } else {
                action.payload = {
                    ...routes
                };
                pushState(action, routes.component, routes.uri);
                allow(action);
            }
        }
    });
    
    
    const logics = [
        validateTransitionByName,
        validateTransitionToRootComponent,
    ];

    return createLogicMiddleware(logics, {});
}
