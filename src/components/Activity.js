// @flow
import moment from 'moment';
import onClickOutside from 'react-onclickoutside';

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import ActivityStyles from '../styles/Activity';
import styles from '../styles';

import type { Activity as ActivityType } from '../types/Activity';

type Props = {
    inEditingState: boolean,
    activity: ActivityType,
    setActivityDescription: (text: string) => void,
    onDelete: () => void,
};

type State = {
    editing: boolean,
    inputValue: string,
};

class Activity extends Component<Props, State> {
    state = {
        editing: this.props.inEditingState,
        inputValue: this.props.activity.description,
    };

    handleClickOutside() {
        this.setState({ editing: false });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing && prevState.editing !== this.state.editing) {
            this.textarea.focus();
        }
    }

    render() {
        const { activity, setActivityDescription, onDelete } = this.props;
        const { editing, inputValue } = this.state;

        let body;
        let actionIcon;

        if (editing) {
            body = (
                <ActivityStyles.TextEditor
                    innerRef={r => {
                        this.textarea = r;
                    }}
                    value={this.state.inputValue}
                    onChange={evt => {
                        this.setState({ inputValue: evt.target.value });
                    }}
                />
            );

            actionIcon = (
                <styles.Icon
                    clickable
                    onClick={() => {
                        this.setState({ editing: false });
                        if (inputValue !== activity.description) {
                            setActivityDescription(inputValue);
                        }
                    }}
                >
                    done
                </styles.Icon>
            );
        } else {
            body = <ReactMarkdown source={activity.description} />;

            actionIcon = (
                <styles.Icon
                    clickable
                    onClick={() => {
                        this.setState({
                            editing: true,
                            inputValue: activity.description,
                        });
                    }}
                >
                    edit
                </styles.Icon>
            );
        }

        return (
            <ActivityStyles.Wrapper>
                <ActivityStyles.Header>
                    <ActivityStyles.DateWrapper>
                        <ActivityStyles.StyledDate>
                            {moment(activity.start).format('HH:mm')}
                        </ActivityStyles.StyledDate>
                        <ActivityStyles.StyledDate>
                            {moment(activity.end).format('HH:mm')}
                        </ActivityStyles.StyledDate>
                    </ActivityStyles.DateWrapper>
                    <ActivityStyles.StyledDuration
                        duration={new Date(activity.end - activity.start)}
                    />
                    {actionIcon}
                    <styles.Icon clickable onClick={onDelete}>
                        delete_forever
                    </styles.Icon>
                </ActivityStyles.Header>
                <ActivityStyles.Body>{body}</ActivityStyles.Body>
            </ActivityStyles.Wrapper>
        );
    }
}

export default onClickOutside(Activity);
