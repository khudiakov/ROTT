import {ADD_PROJECT, START_ACTIVITY, STOP_ACTIVITY,
        SET_ACTIVITY_DESCRIPTION, DELETE_ACTIVITY,
        DELETE_PROJECT } from  '../actions/projects'


export const localStorageWrapper = function(reducer) {
  return (state=JSON.parse(localStorage.getItem('state') || "{}"), action) => {
    const oldState = state;
    const newState = reducer(state, action);
    if (newState != oldState) {
      localStorage.setItem('state', JSON.stringify(newState));
    }

    return newState;
  }
}

const projects = (state={}, action) => {
  let activities;

  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        [action.projectId]:
          {
            title: action.title,
            activities: {}
          }
      }

    case DELETE_PROJECT:
      delete state[action.projectId]
      return {
        ...state
      }

    case START_ACTIVITY:
      activities = state[action.projectId].activities;

      if (Object.values(activities).some(activity => activity.end === null)) {
        return state;
      }

      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          activities: {
            ...activities,
            [action.activityId]: {
              body: "",
              start: new Date().getTime(),
              end: null
            }
          }
        }
      }

    case STOP_ACTIVITY:
      activities = state[action.projectId].activities;
      const keys = Object.keys(activities);
      const lastActivityId = keys[keys.length - 1];

      if (lastActivityId === undefined || activities[lastActivityId].end !== null) {
        return state;
      }

      if (new Date() - state[action.projectId].activities[lastActivityId].start < 1000) {
        delete state[action.projectId].activities[lastActivityId]
        return {
          ...state,
          [action.projectId]: {
            ...state[action.projectId],
            activities: {
              ...state[action.projectId].activities
            }
          }
        }
      }

      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          activities: {
            ...activities,
            [lastActivityId]: {
              ...activities[lastActivityId],
              end: new Date().getTime()
            }
          }
        }
      }

    case SET_ACTIVITY_DESCRIPTION:
      activities = state[action.projectId].activities;
      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          activities: {
            ...activities,
            [action.activityId]: {
              ...activities[action.activityId],
              body: action.body
            }
          }
        }
      }
      
    case DELETE_ACTIVITY:
      delete state[action.projectId].activities[action.activityId]
      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          activities: {
            ...state[action.projectId].activities
          }
        }
      }

    default:
      return state
  }
}

export default projects