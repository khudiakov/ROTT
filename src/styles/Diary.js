import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default { Wrapper };
