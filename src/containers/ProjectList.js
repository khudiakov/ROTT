import { connect } from 'react-redux';

import {
    startActivity,
    stopActivity,
    deleteProject,
    addProject,
    fetchActivities,
} from '../actions/projects';
import { setActiveProject } from '../actions/uistate';

import ProjectList from '../components/ProjectList';

const mapStateToProps = ({ projects, uistate }) => ({
    projects: projects,
    activeProjectId: uistate.activeProjectId,
});

const mapDispatchToProps = dispatch => ({
    startActivity: id => () => dispatch(startActivity(id)),
    stopActivity: id => () => dispatch(stopActivity(id)),
    openProject: id => () => {
        dispatch(setActiveProject(id));
        dispatch(fetchActivities(id));
    },
    deleteProject: id => () => dispatch(deleteProject(id)),
    addProject: title => dispatch(addProject(title)),
});

const ProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export default ProjectsList;
