import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import NewProject from '../components/NewProject';
import Project from '../components/Project';
import Duration from '../components/Duration';
import ProjectList from '../components/ProjectList';
import Timer from '../components/Timer';
import Styles from '../styles';
import Activity from '../components/Activity';
import Diary from '../components/Diary';

storiesOf('Activity', module).add('original', () => (
    <Activity
        setActivityDescription={body => console.log(body)}
        activity={{
            id: 0,
            body: 'test',
            start: new Date(3600),
            end: new Date(16600000),
        }}
    />
));

storiesOf('Diary', module).add('original', () => (
    <Diary
        setActivityDescription={(projectId, activityId, body) =>
            console.log(projectId, activityId, body)}
        onDelete={(projectId, activityId) =>
            console.log('Delete Activity: ', projectId, activityId)}
        project={{
            id: 0,
            title: 'Project #0',
            activities: [
                {
                    id: 0,
                    body: '',
                    start: new Date(3600),
                    end: new Date(16600000),
                },
                {
                    id: 1,
                    body: 'Test!',
                    start: new Date(3600),
                    end: new Date(16600000),
                },
            ],
        }}
    />
));

storiesOf('NewProject', module).add('original', () => <NewProject />);

storiesOf('FabIcon', module).add('original', () => (
    <Styles.FabIcon clickable>add</Styles.FabIcon>
));

storiesOf('Duration', module).add('original', () => (
    <Duration duration={new Date(135462)} />
));

storiesOf('Timer', module).add('original', () => <Timer start={new Date()} />);

storiesOf('Project', module)
    .add('original', () => (
        <Project
            project={{ id: 0, title: 'Project #0', activities: [] }}
            selected={false}
        />
    ))
    .add('selected', () => (
        <Project
            project={{ id: 0, title: 'Project #0', activities: [] }}
            selected={true}
        />
    ))
    .add('selected with timer', () => (
        <Project
            project={{
                id: 0,
                title: 'Project #0',
                activities: [{ id: 0, body: '', start: new Date(), end: null }],
            }}
            selected={true}
        />
    ))
    .add('selected with duration', () => (
        <Project
            project={{
                id: 0,
                title: 'Project #0',
                activities: [
                    {
                        id: 0,
                        body: '',
                        start: new Date(3600),
                        end: new Date(16600000),
                    },
                ],
            }}
            selected={true}
        />
    ));

storiesOf('ProjectList', module).add('original', () => (
    <ProjectList
        activeProjectId={'0'}
        projects={{
            0: {
                title: 'Project #0',
                activities: {
                    0: {
                        body: '',
                        start: new Date(3600),
                        end: new Date(16600000),
                    },
                },
            },
            1: {
                title: 'Project #1',
                activities: {
                    0: {
                        body: '',
                        start: new Date(1500000000000),
                        end: null,
                    },
                },
            },
        }}
        startActivity={id => () => {
            console.log('start', id);
        }}
        stopActivity={id => () => {
            console.log('stop', id);
        }}
        openProject={id => () => {
            console.log('open', id);
        }}
        addProject={title => {
            console.log('add', title);
        }}
        deleteProject={id => () => {
            console.log('delete', id);
        }}
    />
));
