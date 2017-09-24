// @flow
import type { Activity as ActivityType } from './Activity';

export type Project = {
    title: string,
    activities: { [id: number]: ActivityType },
    duration: Date,
    activeActivityStart: ?Date,
};
