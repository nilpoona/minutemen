import React, { PropTypes } from 'react';

const App = (props) => {
    return (
        <div>
            foo bar<br />
            <button onClick={props.clickHandler}>click</button>
        </div>
    );
};

App.defaultProps = {
    clickHandler: () => { return true },
};

App.propTypes = {
    clickHandler: PropTypes.func
};

export default App;
