import Immutable from 'immutable';

import {ADD_PROJECT, START_ACTIVITY, STOP_ACTIVITY,
        SET_ACTIVITY_DESCRIPTION } from  '../actions/projects'


const projects = (state=[], action) => {
  console.log(state)
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        {
          id: action.projectId,
          title: action.title,
          activities: Immutable.Stack()
        }
      ]
    case START_ACTIVITY:
      return state.map(project => {
        if (
          project.id === action.projectId && 
          (project.activities.peek() === undefined || project.activities.peek().end !== null)
        ) {
          const activity = project.activities.peek()
          if (project.activities.peek() !== undefined && new Date() - activity.end < 60 * 1000)  {
            project.activities = project.activities.pop()
            activity.end = null
            project.activities = project.activities.push(activity)
          } else {
            project.activities = project.activities.push({
              id: action.activityId,
              title: "",
              body: "",
              start: new Date(),
              end: null
            })
          }
        }
        return project
      })
    case STOP_ACTIVITY:
      return state.map(project => {
        if (project.id === action.projectId &&
            project.activities.peek() !== undefined && project.activities.peek().end === null) {
          const activity = project.activities.peek()
          project.activities = project.activities.pop()
          activity.end = new Date();
          project.activities = project.activities.push(activity);
        }
        return project
      })
    // TODO: VERY BAD OPTIMIZATION - FIX
    case SET_ACTIVITY_DESCRIPTION:
      return state.map(project => {
        project.activities = project.activities.map(activity => {
          if (activity.id === action.activityId) {
            return Object.assign({}, activity, {title: action.title, body: action.body});
          }
          return activity;
        })
        return project;
      });
    default:
      return state
  }
}

export default projects