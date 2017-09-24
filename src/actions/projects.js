import moment from 'moment';
import { login, logout } from './uistate';

export const fetchActivities = projectId => {
    return function(dispatch) {
        const promise = fetch(
            `http://rott.azurewebsites.net/projects/${projectId}/activities`,
            {
                credentials: 'include',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(response => response.json())
            .then(activities => {
                const stateActivities = {};

                activities.forEach(activity => {
                    stateActivities[activity.activityId] = {
                        description: activity.description,
                        start: new Date(activity.start * 1000),
                        end: activity.end
                            ? new Date(activity.end * 1000)
                            : null,
                    };
                });

                dispatch(setProjectActivities(projectId, stateActivities));
            });
    };
};

export const SET_PROJECT_ACTIVITIES = 'SET_PROJECT_ACTIVITIES';
export const setProjectActivities = (projectId, activities) => {
    return {
        type: SET_PROJECT_ACTIVITIES,
        projectId,
        activities,
    };
};

export const fetchProjects = () => {
    return function(dispatch, getState) {
        fetch('http://rott.azurewebsites.net/projects/', {
            credentials: 'include',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(projects => {
                const stateProjects = {};

                projects.forEach(project => {
                    stateProjects[project.projectId] = {
                        title: project.title,
                        activitiesDuration: new Date(
                            project.activitiesDuration * 1000
                        ),
                        activeActivityStart: project.activeActivityStart
                            ? new Date(project.activeActivityStart * 1000)
                            : null,
                        activities: {},
                    };
                });

                const { uistate } = getState();
                if (uistate.activeProjectId !== null) {
                    dispatch(fetchActivities(uistate.activeProjectId));
                }
                dispatch(setProjects(stateProjects));
                dispatch(login());
            })
            .catch(() => {
                dispatch(logout());
            });
    };
};

export const SET_PROJECTS = 'SET_PROJECTS';
export const setProjects = projects => {
    return {
        type: SET_PROJECTS,
        projects,
    };
};

export const addProject = title => {
    return function(dispatch) {
        fetch('http://rott.azurewebsites.net/projects/', {
            credentials: 'include',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
            }),
        }).then(() => {
            dispatch(fetchProjects());
        });
    };
};

export const startActivity = projectId => {
    return function(dispatch) {
        fetch(
            `http://rott.azurewebsites.net/projects/${projectId}/activities/start`,
            {
                credentials: 'include',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: '{}',
            }
        ).then(() => {
            dispatch(fetchProjects());
        });
    };
};

export const stopActivity = projectId => {
    return function(dispatch) {
        fetch(
            `http://rott.azurewebsites.net/projects/${projectId}/activities/stop`,
            {
                credentials: 'include',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: '{}',
            }
        ).then(() => {
            dispatch(fetchProjects());
        });
    };
};

export const setActivityDescription = (projectId, activityId, text) => {
    return function(dispatch) {
        fetch(
            `http://rott.azurewebsites.net/projects/${projectId}/activities/${activityId}`,
            {
                credentials: 'include',
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: text }),
            }
        ).then(() => {
            dispatch(fetchProjects());
        });
    };
};

export const deleteProject = projectId => {
    return function(dispatch) {
        fetch(`http://rott.azurewebsites.net/projects/${projectId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(() => {
            dispatch(fetchProjects());
        });
    };
};

export const deleteActivity = (projectId, activityId) => {
    return function(dispatch) {
        fetch(
            `http://rott.azurewebsites.net/projects/${projectId}/activities/${activityId}`,
            {
                credentials: 'include',
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            dispatch(fetchProjects());
        });
    };
};
