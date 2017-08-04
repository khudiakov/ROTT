import React, {Component} from "react";
import { connect } from 'react-redux';

import DescriptionContainer from "../containers/DescriptionContainer";
import DiaryContainer from "../containers/DiaryContainer";
import '../styles/Content.sass';

class Content extends Component {
    render() {
        let content = <DescriptionContainer />

        if (this.props.activities !== null) {
            if (this.props.activityId !== null) {
                content = <DescriptionContainer activity={this.props.activities.filter((activity) => activity.id === this.props.activityId).peek()} />
            } else {
                content = <DiaryContainer activities={this.props.activities} />
            }
        }

        return (
            <div className="Content">
                {content}
            </div>            
        );
    }
}

const mapStateToProps = state => {
    const props = {
        activities: null,
        activityId: null
    }

    const projectId = state.uistate.projectId;
    if (projectId !== undefined) {
        props.activities = state.projects.filter((project) => (project.id === projectId))[0].activities;
        
        if (state.uistate.activityId !== undefined) {
            props.activityId = state.uistate.activityId;
        }
    }
    
    return props;
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;