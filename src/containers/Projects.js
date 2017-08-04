import React, {Component} from "react";
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';

import Project from "./Project";
import AddProjectButton from './AddProjectButton';
import '../styles/Projects.sass';

const compareActivitiesByStart = (a, b) => {
    if (a.activities.peek() === undefined) {
        return 1
    }
    if (b.activities.peek() === undefined) {
        return -1
    }

    if (a.activities.peek().start > b.activities.peek().start) {
        return -1
    } else {
        return 1
    }
}

const compareActivitiesByEnd = (a, b) => {
    if (a.activities.peek() === undefined) {
        return 1
    }
    if (b.activities.peek() === undefined) {
        return -1
    }

    if (a.activities.peek().end > b.activities.peek().end) {
        return -1
    } else {
        return 1
    }
}

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h2>Projects</h2>
                <div className="projects__list">
                    {this.props.projects
                        .filter(project => (project.activities.peek() !== undefined &&
                                project.activities.peek().end === null))
                        .sort(compareActivitiesByStart)
                        .map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }
                    <Divider />
                    {this.props.projects
                        .filter(project => (project.activities.peek() === undefined ||
                                project.activities.peek().end !== null))
                                
                        .sort(compareActivitiesByEnd)
                        .map(project => (
                            <Project key={project.id} project={project} />
                        ))
                    }
                </div>
                <AddProjectButton className="add-project__button" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {projects: state.projects}
}

const ProjectsList = connect(mapStateToProps)(Projects);

export default ProjectsList;