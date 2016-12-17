import React, { Component, PropTypes, Children } from 'react';

class Router extends Component {
    render() {
        return Children.only(this.props.children);
    }
}

export default Router
