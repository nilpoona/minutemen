import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Foo from '../components/foo';
import * as Actions from '../actions/index';
import { transitionTo } from '../../../src/actions/';

class FooContainer extends Component {

    static defaultProps = {
        state: ''
    };

    static propTypes = {
        state: PropTypes.string
    }

    render() {
        return (
            <div>
                <Foo />
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

export default connect(mapStateToProps, mapDispatchToProps)(FooContainer);

