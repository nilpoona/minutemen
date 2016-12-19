class History {
    constructor(historyObj) {
        this.history = historyObj;
    }

    pushState(stateObj = {}, componentName, path) {
        this.history.pushState(stateObj, componentName, path);
    }
}

export default function createHistory(historyObj) {
    return new History(historyObj);
}
