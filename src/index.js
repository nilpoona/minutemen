import { createLogic, createLogicMiddleware } from 'redux-logic';
import { TRANSITON_TO_ROOT_COMPONENT, TRANSITON_TO } from './constants/';

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

    const replaceState = (uri) => {
        historyWrap.replaceState(null, null, uri);
    };

    const validateTransitionTo = createLogic({
        type: TRANSITON_TO,
        latest: true,
        validate({ getState, action }, allow, reject) {
            const { uri, params } = action.payload;
            const routes = selector.getPayloadByUri(uri, params, historyWrap.pathname());
            if (routes === null || routes.uri === null) {
                reject();
            } else {
                action.payload = {
                    ...action.payload,
                    ...routes
                };
                
                if (action.payload.pushState) {
                    pushState(action, routes.component, routes.uri);
                } else {
                    replaceState(routes.uri);
                }
                allow(action);
            }
        }
    });


    const validateTransitionByName = createLogic({
        type: 'TRANSITION_BY_NAME',
        latest: true,
        validate({ getState, action }, allow, reject) {
            const { name, params } = action.payload;
            const routes = selector.getPayloadByName(name, params, historyWrap.pathname());
            if (routes === null || routes.uri === null) {
                reject();
            } else {
                action.payload = {
                    ...action.payload,
                    ...routes
                };
                
                if (action.payload.pushState) {
                    pushState(action, routes.component, routes.uri);
                } else {
                    replaceState(routes.uri);
                }
                allow(action);
            }
        }
    });

    const validateTransitionToRootComponent = createLogic({
        type: TRANSITON_TO_ROOT_COMPONENT,
        latest: true,
        validate({ getState, action }, allow, reject) {
            const routes = selector.rootComponent;
            if (routes === null) {
                reject();
            } else {
                action.payload = {
                    ...routes
                };

                console.log(routes);
                if (action.payload.pushState) {
                    pushState(action, routes.component, routes.uri);
                } else {
                    replaceState(routes.uri);
                }

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
