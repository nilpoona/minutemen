import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/';
import * as Actions from '../actions/index';

class AppContainer extends Component {

    static defaultProps = {
        state: ''
    };

    static propTypes = {
        state: PropTypes.string
    }

    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.state};
}

function mapDispatchToProps(dispatch) {
    return { actions:  bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

