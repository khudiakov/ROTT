// @flow
import React from 'react';
import styled from 'styled-components';

import type { Element } from 'react';

const Wrapper = styled.div`
    display: ${props => (props.open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props =>
        props.cover ? rgba(0, 0, 0, 0.3) : 'transparent'};
    align-items: center;
    justify-content: center;
`;

const Window = styled.div``;

const Header = styled.div``;
const Body = styled.div``;
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

type Props = {
    open: boolean,
    children: Element<any>,
    onSubmit: (props: any, state: any) => void,
    onClose: () => void,
};

const Modal = ({ open, children, onSubmit, onClose }: Props) => {
    const Children = children.type;
    let childrenRef;

    return (
        <Wrapper open={open}>
            <Window>
                <Header />
                <Body>
                    <Children
                        ref={r => {
                            childrenRef = r;
                        }}
                        {...children.props}
                    />
                </Body>
                <Footer>
                    <button
                        onClick={() => {
                            onSubmit(childrenRef.props, childrenRef.state);
                        }}
                    >
                        Submit
                    </button>
                </Footer>
            </Window>
        </Wrapper>
    );
};

export default Modal;
