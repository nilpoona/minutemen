import React, { PropTypes } from 'react';

const App = (props) => {
    return (
        <div>
            root<br />
            <button onClick={props.transitionToFoo}>名前からパスを逆引き</button>
            <button onClick={props.transitionToBar}>名前からパスを逆引き（パラメータあり）</button>
            <button onClick={props.transitionTo}>パスを直接指定</button>
        </div>
    );
};

App.defaultProps = {
    transitionToFoo: () => { return true },
    transitionToBar: () => { return true },
    transitionTo: () => { return true },
};

App.propTypes = {
    transitionToFoo: PropTypes.func,
    transitionToBar: PropTypes.func,
    transitionTo: PropTypes.func,
};

export default App;
