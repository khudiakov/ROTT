import styled from 'styled-components';

import styles from './';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -10px;
    padding: 10px 40px 20px 20px;
    z-index: 0;
    cursor: pointer;
    position: relative;

    border-radius: 0 10px 0 0;
    border-width: 1px 1px 0 0;
    border-color: #00bcd4;
    border-style: solid;

    background: ${props => (props.selected ? '#00bcd4' : 'white')};
    color: ${props => (props.selected ? 'white' : '#00bcd4')};

    transition: background 0.2s ease, color 0.2s ease;
    box-shadow: 0 -5px 8px 0 rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #00bcd4;
`;

const CloseIcon = styled(styles.Icon)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 22px;
    cursor: pointer;

    &::before {
        content: 'clear';
    }
`;

const Title = styled.h2`
    margin: 0;
    font-family: 'Zilla Slab', sans-serif;
`;

const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid #00bcd4;
    outline: none;
    font-size: 1.5em;
    font-family: 'Zilla Slab', sans-serif;
    color: #00bcd4;
    font-weight: bold;
    margin-bottom: 15px;
`;

export default { Wrapper, CloseIcon, Title, Input };
