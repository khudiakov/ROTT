import React, { Component } from 'react';


function formatDate(date) {
    let result = ""

    let seconds = Math.floor(date.getTime()/1000);
    
    const hours = Math.floor(seconds/3600);
    if (hours > 0) {
        result += hours+" h. ";
    }
    seconds %= 3600;

    const minutes = Math.floor(seconds/60);
    if (minutes > 0) {
        result += minutes+" min. "
    }
    seconds %= 60;

    if (seconds >= 0) {
        result += seconds+" sec."
    }
    
    if (date.getTime() === 0) {
        result = "No Activities"
    }
    return result;
}


export class Duration extends Component {
    render() {
        return (
            <span>{formatDate(this.props.duration)}</span>
        )
    }
}


export class Timer extends Component {
    getDuration() {
        return new Date(new Date().getTime() - this.props.start)
    }

    constructor(props) {
        super(props);
        
        this.state = {
            duration: this.getDuration()
        }
    }

    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState({duration: this.getDuration()})
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <span>{formatDate(this.state.duration)}</span>
        )
    }
}