import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import ProjectStyles from '../styles/Project';
import styles from '../styles';

type Props = {
    onBlur: () => void,
    onAdd: (inputValue: string) => void,
};

type State = {
    inputValue: string,
};

class NewProject extends Component<Props, State> {
    state = { inputValue: '' };

    handleClickOutside() {
        this.props.onBlur();
    }

    onAdd = () => {
        this.props.onAdd(this.state.inputValue);
    };

    componentDidMount() {
        this.inputRef.focus();
    }

    render() {
        return (
            <ProjectStyles.Wrapper selected={false}>
                <ProjectStyles.Input
                    placeholder={'New Project Title'}
                    innerRef={input => (this.inputRef = input)}
                    onChange={evt => {
                        this.setState({ inputValue: evt.target.value });
                    }}
                />
                <styles.Icon onClick={this.onAdd} color={'#00bcd4'} clickable>
                    add
                </styles.Icon>
            </ProjectStyles.Wrapper>
        );
    }
}

export default onClickOutside(NewProject);
