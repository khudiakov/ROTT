import { SET_ACTIVE_PROJECT, LOGIN, LOGOUT } from '../actions/uistate';

const uistate = (
    state = { activeProjectId: null, loggedIn: false },
    action
) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
            };
        case SET_ACTIVE_PROJECT:
            return {
                ...state,
                activeProjectId: action.projectId,
            };
        default:
            return state;
    }
};

export default uistate;
