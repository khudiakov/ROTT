import { connect } from 'react-redux';

import { deleteActivity, setActivityDescription } from '../actions/projects';
import Diary from '../components/Diary';

const mapStateToProps = state => ({
    projectId: state.uistate.activeProjectId,
    project: state.projects[state.uistate.activeProjectId] || null,
});

const mapDispatchToProps = dispatch => ({
    onDelete: (projectId, activityId) => {
        dispatch(deleteActivity(projectId, activityId));
    },
    setActivityDescription: (projectId, activityId, body) => {
        dispatch(setActivityDescription(projectId, activityId, body));
    },
});

const DiaryContainer = connect(mapStateToProps, mapDispatchToProps)(Diary);
export default DiaryContainer;
