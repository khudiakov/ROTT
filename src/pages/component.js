import React, { Component } from 'react';

import Login from '../pages/Login';
import Application from '../pages/Application';

class Root extends Component {
    componentWillMount() {
        this.props.fetchProjects();
    }

    render() {
        const { loggedIn } = this.props;

        return loggedIn ? <Application /> : <Login />;
    }
}

export default Root;
