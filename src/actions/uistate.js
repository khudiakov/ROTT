import { fetchProjects } from './projects';

export const SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT';
export const setActiveProject = projectId => ({
    type: SET_ACTIVE_PROJECT,
    projectId,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
    type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
});

export const runLogin = username => dispatch => {
    fetch('http://rott.azurewebsites.net/login/', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
        }),
    }).then(() => {
        dispatch(fetchProjects());
    });
};
