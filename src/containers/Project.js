import React, {Component} from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';

import { startActivity, stopActivity } from '../actions/projects';
import { setActiveProject } from '../actions/uistate';
import "../styles/Project.sass";

function formatDate(date) {
    let result = ""

    let seconds = Math.round(date.getTime()/1000);
    
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

class Project extends Component {
    constructor(props) {
        super(props);
        
        const duration = this.props.project.activities
            .filter((activity) => activity.end != null)
            .reduce((sum, activity) => {
                return new Date(sum.getTime() + (activity.end - activity.start))
            }, new Date(0))

        this.state = {
            duration
        }
    }

    componentWillMount() {
        const lastActivity = this.props.project.activities.peek();

        if (lastActivity !== undefined && lastActivity.end === null) {
            this.setState({duration: new Date(new Date - lastActivity.start)});
            this.interval = setInterval(() => {this.setState({duration: new Date(new Date() - lastActivity.start)})}, 1000);
        }
    }

    componentWillUnmount() {
        if (this.interval != null) {
            clearInterval(this.interval);
        }
    }

    render() {
        let button = null;

        const lastActivity = this.props.project.activities.peek();

        let icon;
        let onTouchTap;
        if (lastActivity !== undefined && lastActivity.end === null) {
            icon = "stop"
            onTouchTap = () => {this.props.stop(this.props.project.id)}
        } else {
            icon = "play_arrow"
            onTouchTap = () => {this.props.start(this.props.project.id)}
        }


        return (
            <button className="Project" onClick={() => {this.props.openProject(this.props.project.id)}}>
                <h2>{this.props.project.title}</h2>
                <h3>{formatDate(this.state.duration)}</h3>
                <IconButton className="icon__button" iconClassName="material-icons" touch={true} onTouchTap={onTouchTap} >
                    {icon}
                </IconButton>
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    start: (id) => {
        dispatch(startActivity(id))
    },
    stop: (id) => {
        dispatch(stopActivity(id))
    },
    openProject: (id) => {
        dispatch(setActiveProject(id))
    }
})

const ProjectController = connect(null, mapDispatchToProps)(Project);

export default ProjectController;