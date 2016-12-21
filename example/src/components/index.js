import React, { PropTypes } from 'react';

const App = (props) => {
    return (
        <div>
            root<br />
            <button onClick={props.transitionToFoo}>/foo</button>
            <button onClick={props.transitionToBar}>/bar/:id</button>
            <button onClick={props.transitionTo}>/bar/1/1/</button>
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
