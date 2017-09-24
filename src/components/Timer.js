// @flow
import React, { Component } from 'react';

import TimeStyle from '../styles/Time';

import Utils from '../utils';

type Props = {
    start: Date,
};

type State = {
    duration: Date,
};

class Timer extends Component<Props, State> {
    static defaultProps = {
        start: new Date(1),
    };

    getDuration = () => new Date(new Date().getTime() - this.props.start);

    state = { duration: this.getDuration() };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ duration: this.getDuration() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <TimeStyle>{Utils.dateToString(this.state.duration)}</TimeStyle>;
    }
}

export default Timer;
