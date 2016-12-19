class Selector {

    constructor(routing) {
        this.routing = routing;
    }
    
    getPayloadByName(name) {
        const keys = Object.keys(this.routing);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            const routes = this.routing[key];
            if (routes.component === name ) {
                return { uri: key, component: routes.index};
            }
        }

        return null;
    }
}

export default function createSelector(routing) {
    return new Selector(routing);
}
