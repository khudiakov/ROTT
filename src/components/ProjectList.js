// @flow
import React, { Component } from 'react';

import ProjectComponent from '../components/Project';
import NewProjectComponent from '../components/NewProject';

import styles from '../styles';
import ProjectListStyles from '../styles/ProjectList';

import type { Project as ProjectType } from '../types/Project';

type Props = {
    projects: Array<ProjectType>,
    activeProjectId: number,
    startActivity: (id: number) => () => void,
    stopActivity: (id: number) => () => void,
    openProject: (id: number) => () => void,
    addProject: (title: string) => void,
    deleteProject: (id: number) => () => void,
};

type State = {
    addNew: boolean,
};

class ProjectList extends Component<Props, State> {
    state = { addNew: false };

    render() {
        const {
            projects,
            activeProjectId,
            startActivity,
            stopActivity,
            openProject,
            addProject,
            deleteProject,
        } = this.props;
        const { addNew } = this.state;

        return (
            <ProjectListStyles.Wrapper>
                <ProjectListStyles.List>
                    {Object.entries(projects).map(([projectId, project]) => (
                        <ProjectComponent
                            key={projectId}
                            project={project}
                            selected={projectId === activeProjectId}
                            startActivity={startActivity(projectId)}
                            stopActivity={stopActivity(projectId)}
                            openProject={openProject(projectId)}
                            deleteProject={deleteProject(projectId)}
                        />
                    ))}
                    {addNew ? (
                        <NewProjectComponent
                            onBlur={() => {
                                this.setState({ addNew: false });
                            }}
                            onAdd={value => {
                                this.setState({ addNew: false });
                                addProject(value);
                            }}
                        />
                    ) : null}
                </ProjectListStyles.List>
                <styles.FabIcon
                    clickable
                    show={!addNew}
                    color={'#fff'}
                    onClick={() => {
                        this.setState({ addNew: true });
                    }}
                >
                    add
                </styles.FabIcon>
            </ProjectListStyles.Wrapper>
        );
    }
}

export default ProjectList;
