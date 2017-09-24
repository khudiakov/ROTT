import React, { Component } from 'react';

import styles from '../../styles';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.5);
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Header = styled.h1`
    position: fixed;
    top: 20%;
    width: 100%;
    text-align: center;
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
`;

const Button = styled.button`
    border: 1px solid;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0);
    margin: 20px auto 0;
    padding: 4px 10px;
    cursor: pointer;
`;

class Login extends Component {
    state = { username: '' };
    render() {
        const { onLogin } = this.props;
        const { username } = this.state;

        return (
            <styles.RootWrapper>
                <Header>Result Oriented Time Tracker</Header>
                <Wrapper>
                    <input
                        placeholder={'Username'}
                        value={username}
                        onChange={evt => {
                            this.setState({ username: evt.target.value });
                        }}
                    />
                    <Button
                        onClick={() => {
                            onLogin(username);
                        }}
                    >
                        Login
                    </Button>
                </Wrapper>
            </styles.RootWrapper>
        );
    }
}

export default Login;
