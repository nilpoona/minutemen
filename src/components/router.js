import React, { Component, PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Router extends Component {
    
    get renderComponent() {
        const { component } = this.props.routing;
        return this.props.children[component];
    }
    
    render() {
        return Children.only(this.renderComponent);
    }
}

function mapStateToProps(state) {
    return { routing: state.routing};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);

