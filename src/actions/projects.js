let projectId = parseInt(localStorage.getItem('projectId')) || 0;
let activityId = parseInt(localStorage.getItem('activityId')) || 0;

console.log(projectId, activityId);

export const ADD_PROJECT = "ADD_PROJECT";
export const addProject = title => {
    localStorage.setItem('projectId', ++projectId)
    return {
        type: ADD_PROJECT,
        projectId: projectId,
        title
    }
}

export const DELETE_PROJECT = "DELETE_PROJECT";
export const deleteProject = projectId => {
    return {
        type: DELETE_PROJECT,
        projectId
    }
}

export const START_ACTIVITY = "START_ACTIVITY";
export const startActivity = projectId => {
    localStorage.setItem('activityId', ++activityId)
    return {
        type: START_ACTIVITY,
        projectId,
        activityId: activityId
    }
}

export const STOP_ACTIVITY = "STOP_ACTIVITY";
export const stopActivity = projectId => {
    return {
        type: STOP_ACTIVITY,
        projectId
    }
}

export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const deleteActivity = (projectId, activityId) => {
    return {
        type: DELETE_ACTIVITY,
        projectId,
        activityId
    }
}

export const SET_ACTIVITY_DESCRIPTION = "SET_ACTIVITY_DESCRIPTION";
export const setActivityDescription = (projectId, activityId, body) => ({
    type: SET_ACTIVITY_DESCRIPTION,
    projectId,
    activityId,
    body
})