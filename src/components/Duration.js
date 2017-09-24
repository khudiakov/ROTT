// @flow
import React from 'react';

import TimeStyle from '../styles/Time';

import Utils from '../utils';

type Props = {
    duration: Date,
};

const Duration = ({ duration, ...props }: Props) => (
    <TimeStyle {...props}>{Utils.dateToString(duration)}</TimeStyle>
);

export default Duration;
