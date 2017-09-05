export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";
export const setActiveProject = projectId => ({
    type: SET_ACTIVE_PROJECT,
    projectId
})

export const SET_ACTIVE_ACTIVITY = "SET_ACTIVE_ACTIVITY";
export const setActiveActivity = (projectId, activityId) => ({
    type: SET_ACTIVE_ACTIVITY,
    projectId,
    activityId
})