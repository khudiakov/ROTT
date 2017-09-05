import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import IconButton from 'material-ui/IconButton';
import moment from 'moment';

import EditDescriptionModal from "./EditDescriptionModal"
import { deleteActivity, setActivityDescription } from "../actions/projects";
import { Duration } from "./Timer";
import '../styles/Diary.sass';

const EmptyDivWithCenteredText = styled.div`
    color: rgba(0,0,0,0.7);
    text-align: center;
    padding-top: 100px;
    font-size: 1.5em;
`;

const StyledActivity = styled.div`
    border: 1px solid purple;
    border-radius: 3px;
    margin: 3px;
    padding
`;

class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        const maxHeight = (this.state.open?'none':'300px');

        return (
            <StyledActivity onClick={()=>{this.setState({open: !this.state.open})}}>
                <div style={{display: 'flex', backgroundColor: 'purple', padding: '5px', color: 'white', minWidth: '760px'}}>
                    <h3 style={{flex: 1, margin: 0, fontSize: '2em'}}>{ <Duration duration={new Date(this.props.activity.end - this.props.activity.start)} /> }</h3>
                    <div style={{flex: 4, textAlign: 'center', flex: 1}}>
                        <p style={{margin: 0, fontSize: '1em'}}><b>From</b> {moment(this.props.activity.start).format("DD.MM.YYYY, HH:mm:ss")}</p>
                        <p style={{margin: 0, fontSize: '1em'}}><b>To</b> {moment(this.props.activity.end).format("DD.MM.YYYY, HH:mm:ss")}</p>
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <EditDescriptionModal body={this.props.activity.body} onSave={(body)=>{this.props.onSave(body)}} />
                        <IconButton iconStyle={{color: 'white'}} className="icon__button" iconClassName="material-icons" touch={true} onTouchTap={this.props.onDelete} >
                            delete_forever
                        </IconButton>
                    </div>
                </div>
                <div style={{maxHeight: maxHeight, overflowY: 'hidden', padding: (this.props.activity.body?'5px':'0px')}}>
                    <ReactMarkdown  source={this.props.activity.body} />
                </div>
            </StyledActivity>
        )
    }
}

class Diary extends Component {
    render() {
        let content = "";

        if (this.props.projectId) {
            const activities = Object.entries(this.props.projects[this.props.projectId].activities).filter(entry => entry[1].end);
            if (activities.length > 0) {
                content = activities
                            .reverse()
                            .map(entry => (
                                <Activity 
                                    key={entry[0]} 
                                    activity={entry[1]} 
                                    onDelete={()=>{this.props.delete(this.props.projectId, entry[0])}} 
                                    onSave={(body)=>{this.props.change(this.props.projectId, entry[0], body)}} 
                                />
                            ))
            } else {
                content = (<EmptyDivWithCenteredText>No activity yet</EmptyDivWithCenteredText>)
            }
        }

        return (
            <div className="Diary">
                {content}
            </div>            
        );
    }
}


const mapStateToProps = (state) => ({
    projectId: state.uistate.projectId,
    projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
    delete: (projectId, activityId) => {
        dispatch(deleteActivity(projectId, activityId))
    },
    change: (projectId, activityId, body) => {
        dispatch(setActivityDescription(projectId, activityId, body))
    }
})

const DiaryContainer = connect(mapStateToProps, mapDispatchToProps)(Diary)
export default DiaryContainer;