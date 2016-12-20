import React, { PropTypes } from 'react';

const App = (props) => {
    return (
        <div>
            root<br />
            <button onClick={props.transitionToFoo}>/foo</button>
            <button onClick={props.transitionToBar}>/bar/:id</button>
        </div>
    );
};

App.defaultProps = {
    transitionToFoo: () => { return true },
    transitionToBar: () => { return true },

};

App.propTypes = {
    transitionToFoo: PropTypes.func,
    transitionToBar: PropTypes.func,
};

export default App;
