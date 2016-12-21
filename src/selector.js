class Selector {

    constructor(routing) {
        this.routing = routing;
    }

    replaceUri(pattern, params) {
        let index = 0;
        
        if (pattern.match(/(\(.*?\))/g) === null) {
            return pattern.replace(/\^|\$/g, '');
        }

        return pattern
            .replace(/(\(.*?\))/g, function(...args) {
                const param = new String(params[index]);
                const reg = new RegExp(args[0]);
                index++;
                if (param.match(reg)[0] !== '') {
                    return param
                } else {
                    throw new Error('parameter not found.');
                }
            })
            .replace(/\^|\$/g, '');
    }
    
    generateUri(pattern, params) {
        try {
            return this.replaceUri(pattern, params);
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getPathParams(match) {
        if (match.length === 1) {
            return null;
        }

        return match.slice(1, match.length);
    }

    getPayloadByUri(uri) {
        const keys = Object.keys(this.routing);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            let match = uri.match(new RegExp(key));
            if (match === null) {
                continue;
            }

            let routes = this.routing[key];
            let params = this.getPathParams(match); 
            return { uri: uri, component: routes.index, params };
        }

        return null;
    }

   
    getPayloadByName(name, params = null, uri) {
        const keys = Object.keys(this.routing);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            const routes = this.routing[key];
            if (routes.component === name ) {
                const newUri = this.generateUri(key, params);
                if (params === null) {
                    return { uri: newUri, component: routes.index };
                } else {
                    return { uri: newUri, component: routes.index, params };
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
                const newUri = this.generateUri(key, []);
                return { uri: newUri, component: routes.index };
            }
        }
        return null;
    }
}

export default function createSelector(routing) {
    return new Selector(routing);
}
