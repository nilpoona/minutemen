class Selector {

    constructor(routing) {
        this.routing = routing;
    }

    replacePathParameter(uri, params) {
        const keys = Object.keys(params);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            let pattern = `/:${key}:/?`;
            let reg = new RegExp(pattern, 'g');
            uri = uri.replace(reg, `/${params[key]}/`);
        }

        return uri;
    }
    
    getPayloadByName(name, params = null) {
        const keys = Object.keys(this.routing);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            const routes = this.routing[key];
            if (routes.component === name ) {
                if (params === null) {
                    return { uri: key, component: routes.index };
                } else {
                    return { uri: this.replacePathParameter(key, params), component: routes.index, params };
                }
            }
        }

        return null;
    }

    get rootComponent() {
        const keys = Object.keys(this.routing);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            const routes = this.routing[key];
            if (routes.hasOwnProperty('root') && routes.root) {
                return { uri: key, component: routes.index };
            }
        }
        return null;
    }
}

export default function createSelector(routing) {
    return new Selector(routing);
}
