import React from 'react';

import Activity from './Activity';

import Styles from '../styles';
import DiaryStyles from '../styles/Diary';

const Diary = ({ projectId, project, onDelete, setActivityDescription }) => {
    let content = '';

    if (project) {
        const completeActivities = Object.entries(project.activities)
            .filter(([id, activity]) => activity.end)
            .reduce((acc, [id, activity]) => {
                acc[id] = activity;
                return acc;
            }, {});
        if (Object.keys(completeActivities).length > 0) {
            content = Object.entries(completeActivities)
                .reverse()
                .map(
                    ([activityId, activity]) =>
                        activity.end ? (
                            <Activity
                                key={activityId}
                                activity={activity}
                                onDelete={() => {
                                    onDelete(projectId, activityId);
                                }}
                                setActivityDescription={description => {
                                    setActivityDescription(
                                        projectId,
                                        activityId,
                                        description
                                    );
                                }}
                            />
                        ) : null
                );
        } else {
            content = (
                <Styles.EmptyDivWithCenteredText>
                    No activity yet
                </Styles.EmptyDivWithCenteredText>
            );
        }
    }

    return <DiaryStyles.Wrapper>{content}</DiaryStyles.Wrapper>;
};

export default Diary;
