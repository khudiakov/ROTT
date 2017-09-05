import {SET_ACTIVE_PROJECT} from "../actions/uistate";
import {DELETE_PROJECT} from "../actions/projects";

const uistate = (state={projectId: undefined, activityId: undefined}, action) => {
    switch (action.type) {
        case DELETE_PROJECT:
            if (state.projectId === action.projectId) {
                return {
                    projectId: null
                }
            }
            return state;
        case SET_ACTIVE_PROJECT:
            return {
                projectId: action.projectId,
                activityId: null
            }
        default:
            return state;
    }
}

export default uistate;