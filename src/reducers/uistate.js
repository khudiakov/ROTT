import {SET_ACTIVE_PROJECT, SET_ACTIVE_ACTIVITY} from "../actions/uistate";

const uistate = (state={projectId: undefined, activityId: undefined}, action) => {
    switch (action.type) {
        case SET_ACTIVE_PROJECT:
            state.projectId = action.projectId;
            state.activityId = undefined;
            return Object.assign({}, state);
        case SET_ACTIVE_ACTIVITY:
            state.activityId = action.activityId;    
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default uistate;