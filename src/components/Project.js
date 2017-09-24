// @flow
import React from 'react';

import Timer from './Timer';
import Duration from './Duration';

import styles from '../styles';
import ProjectStyles from '../styles/Project';

import type { Project as ProjectType } from '../types/Project';

type Props = {
    project: ProjectType,
    selected: boolean,
    startActivity: () => void,
    stopActivity: () => void,
    openProject: () => void,
    deleteProject: () => void,
};

const Project = ({
    project,
    selected,
    startActivity,
    stopActivity,
    openProject,
    deleteProject,
}: Props) => {
    const active = project.activeActivityStart !== null;

    const durationElement = active ? (
        <Timer start={project.activeActivityStart} />
    ) : (
        <Duration duration={project.activitiesDuration} />
    );

    return (
        <ProjectStyles.Wrapper
            active={active}
            selected={selected}
            onClick={openProject}
        >
            <ProjectStyles.CloseIcon onClick={deleteProject} />

            <div>
                <ProjectStyles.Title>{project.title}</ProjectStyles.Title>
                {durationElement}
            </div>
            <styles.Icon
                onClick={active ? stopActivity : startActivity}
                clickable
            >
                {active ? 'stop' : 'play_arrow'}
            </styles.Icon>
        </ProjectStyles.Wrapper>
    );
};

export default Project;
