import React, { Component, PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transitionByName, transitionToRootComponent } from '../actions/';
import { ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT } from '../constants/';

class Router extends Component {

    componentWillMount() {
        this.props.historyWrapper.listenPopstate((name, params) => {
            if (name === ACTION_TYPE_TRANSITON_TO_ROOT_COMPONENT) {
                this.props.actions.transitionToRootComponent(false);
            } else {
                this.props.actions.transitionByName(name, params, false);
            }
        });
    }
    
    get renderComponent() {
        const { component } = this.props.routing;
        return this.props.children[component];
    }
    
    render() {
        const props = {
            ...this.props.actions,
            params: this.props.routing.params,
        };
        return React.cloneElement(this.renderComponent, props);
    }
}

function mapStateToProps(state) {
    return { routing: state.routing };
}

function mapDispatchToProps(dispatch) {
    const actions = { 
        transitionByName: transitionByName,
        transitionToRootComponent: transitionToRootComponent,
    };
    return { actions: bindActionCreators(actions, dispatch) };

}

export default connect(mapStateToProps, mapDispatchToProps)(Router);

