import React, {Component} from "react";
import { connect } from 'react-redux';

import Project from "./Project";
import AddProjectButton from './AddProjectButton';
import '../styles/Projects.sass';

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <div className="projects__list">
                    {Object.entries(this.props.projects).map(entry => (
                        <Project key={entry[0]} projectId={entry[0]} active={Object.values(entry[1].activities).some(activity => activity.end === null)} /> 
                    ))}
                </div>
                <AddProjectButton className="add-project__button" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
}

const ProjectsList = connect(mapStateToProps)(Projects);

export default ProjectsList;