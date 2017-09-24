import { SET_PROJECTS, SET_PROJECT_ACTIVITIES } from '../actions/projects';

const projects = (state = {}, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return action.projects;
        case SET_PROJECT_ACTIVITIES:
            return {
                ...state,
                [action.projectId]: {
                    ...state[action.projectId],
                    activities: action.activities,
                },
            };

        default:
            return state;
    }
};

export default projects;
