let projectId = 0;
let activityId = 0;

export const ADD_PROJECT = "ADD_PROJECT";
export const addProject = title => {
    return {
        type: ADD_PROJECT,
        projectId: projectId++,
        title
    }
}

export const START_ACTIVITY = "START_ACTIVITY";
export const startActivity = projectId => {
    return {
        type: START_ACTIVITY,
        projectId,
        activityId: activityId++
    }
}

export const STOP_ACTIVITY = "STOP_ACTIVITY";
export const stopActivity = projectId => {
    return {
        type: STOP_ACTIVITY,
        projectId: projectId
    }
}

export const SET_ACTIVITY_DESCRIPTION = "SET_ACTIVITY_DESCRIPTION";
export const setActivityDescription = (activityId, title, body) => ({
    type: SET_ACTIVITY_DESCRIPTION,
    activityId,
    title,
    body
})