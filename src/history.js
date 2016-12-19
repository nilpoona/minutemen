class History {
    constructor() {
        this.bind();
        this.dispatch = null;
    }

    bind() {
       window.addEventListener('popstate',function(e){ 
           console.log(e);
       });
    }

    pushState(stateObj = {}, componentName, path) {
        window.history.pushState(stateObj, componentName, path);
    }
}

export default function createHistory() {

    const pushState = (stateObj = {}, componentName, path) => {
        window.history.pushState(stateObj, componentName, path);
    };

    const handlePopstate = (e, dispatch) => {
        console.log(e);
    };

    const listenPopstate = (store) => {
        window.addEventListener('popstate', function(e){ 
            if (store) {
                handlePopstate(e, store.dispatch);
            }
        });
    };

    return {
        pushState: pushState,
        listenPopstate: listenPopstate
    };
}
