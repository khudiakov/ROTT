import styled from 'styled-components';

import Duration from '../components/Duration';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 10px 3px rgba(0, 0, 0, 0.2);
    margin: 3px 20px 20px;
`;

const Header = styled.div`
    display: flex;
    background-color: #00bcd4;
    padding: 5px;
    color: white;
    align-items: center;
`;

const Body = styled.div`display: flex;`;

const StyledDuration = styled(Duration)`
    font-size: 1.4em;
    flex: 1;
`;

const DateWrapper = styled.div`margin-right: 20px;`;

const StyledDate = styled.p`
    margin: 0;
    font-size: 0.8em;
    font-family: 'Raleway', sans-serif;
`;

const TextEditor = styled.textarea`
    flex: 1;
    resize: none;
    height: 80vh;
    border: none;
    outline: none;
`;

export default {
    Wrapper,
    Body,
    Header,
    StyledDuration,
    DateWrapper,
    StyledDate,
    TextEditor,
};
