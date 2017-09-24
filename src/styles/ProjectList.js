import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    min-width: 340px;
    position: relative;
    min-height: 100vh;
`;

const List = styled.div`
    flex: 13;
    overflow-y: scroll;
    padding: 20px 0 40px 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default { Wrapper, List };
