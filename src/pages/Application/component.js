import React from 'react';

import ProjectsList from '../../containers/ProjectList';
import Diary from '../../containers/Diary';

import styles from '../../styles';

const Application = () => (
    <styles.RootWrapper>
        <ProjectsList />
        <Diary />
    </styles.RootWrapper>
);

export default Application;
