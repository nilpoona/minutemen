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

    transitionToFoo = () => {
        this.props.transitionByName('FooContainer');
    }

    transitionToBar = () => {
        this.props.transitionByName('BarContainer', [ 1, 1 ]);
    }

    transitionTo = () => {
        this.props.transitionTo('/bar/2/1/');
    }

    render() {
        return (
            <div>
                <App
                    transitionToFoo={this.transitionToFoo}
                    transitionToBar={this.transitionToBar}
                    transitionTo={this.transitionTo}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state.state};
}

function mapDispatchToProps(dispatch) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

