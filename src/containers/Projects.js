import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import Project from "./Project";
import AddProjectButton from './AddProjectButton';

const ProjectsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    min-width: 340px;
`;

const ProjectsListStyled = styled.div`
    flex: 13;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }    
`;

class Projects extends Component {
    render() {
        return (
            <ProjectsStyled>
                <ProjectsListStyled>
                    {Object.entries(this.props.projects).map(entry => (
                        <Project key={entry[0]} projectId={entry[0]} active={Object.values(entry[1].activities).some(activity => activity.end === null)} />
                    ))}
                </ProjectsListStyled>
                <AddProjectButton className="add-project__button" />
            </ProjectsStyled>
        )
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
}

const ProjectsList = connect(mapStateToProps)(Projects);

export default ProjectsList;