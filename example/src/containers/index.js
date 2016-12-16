import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/';
import * as Actions from '../actions/index';
import { transitionTo } from '../../../src/actions/';

class AppContainer extends Component {

    static defaultProps = {
        state: ''
    };

    static propTypes = {
        state: PropTypes.string
    }

    clickHandler = () => {
        this.props.actions.transitionTo();
    }

    render() {
        return (
            <div>
                <App clickHandler={this.clickHandler} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.state};
}

function mapDispatchToProps(dispatch) {
    const actions = {
        ...Actions,
        transitionTo
    };
    return { actions:  bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

