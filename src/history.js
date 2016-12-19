class History {
    constructor(historyObj) {
        this.history = historyObj;
    }
}

export default function createHistory(historyObj) {
    return new History(historyObj);
}
