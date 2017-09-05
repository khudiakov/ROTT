import React, {Component} from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';

import { startActivity, stopActivity, deleteProject } from '../actions/projects';
import StyledProjectItem from "../components/Project";
import { setActiveProject, setActiveActivity } from '../actions/uistate';
import { Timer, Duration } from './Timer';

class Project extends Component {
    render() {
        const activities = Object.values(this.props.project.activities);
        const lastActivity = activities[activities.length - 1];
        const active = lastActivity !== undefined && lastActivity.end === null;

        let icon;
        let onTouchTap;
        let durationElement;
        if (active) {
            icon = "stop"
            durationElement = <Timer start={lastActivity.start} />
            onTouchTap = () => {
                this.props.stop(this.props.projectId); 
            }
        } else {
            icon = "play_arrow"
            const duration = activities
                .reduce((sum, activity) => {
                    return new Date(sum.getTime() + ((activity.end || new Date().getTime()) - activity.start))
                }, new Date(0))


            durationElement = <Duration duration={duration} />
            onTouchTap = () => { 
                this.props.start(this.props.projectId); 
            }
        }

        return (
            <StyledProjectItem active={active} selected={this.props.selected} onClick={() => {this.props.openProject(this.props.projectId)}}>
                <IconButton iconClassName="material-icons" 
                    style={{position: 'absolute', top: '-12px', right: '-12px'}} 
                    iconStyle={{fontSize: '16px', color: 'black !impoertant'}}
                    touch={true} onTouchTap={()=>{this.props.deleteProject(this.props.projectId)}}                
                >
                    clear
                </IconButton>
                <h2>{this.props.project.title}</h2>
                {durationElement}
                <IconButton iconClassName="material-icons" touch={true} onTouchTap={onTouchTap} >
                    {icon}
                </IconButton>
            </StyledProjectItem>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.projects[ownProps.projectId],
        selected: state.uistate.projectId === ownProps.projectId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    start: (id) => {
        dispatch(startActivity(id))
    },
    stop: (id) => {
        dispatch(stopActivity(id))
    },
    openProject: (id) => {
        dispatch(setActiveProject(id))
    },
    deleteProject: (id) => {
        dispatch(deleteProject(id))
    }
})

const ProjectController = connect(mapStateToProps, mapDispatchToProps)(Project);

export default ProjectController;