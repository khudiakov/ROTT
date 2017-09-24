import styled from 'styled-components';

const Icon = styled.span`
    display: ${props => (props.show === false ? 'none' : 'block')};
    font-family: Material Icons;
    font-size: ${props => props.size || '36px'};
    cursor: ${props => (props.clickable ? 'pointer' : 'initial')};
    color: ${props => props.color || 'inherit'};
`;

const FabIcon = Icon.extend`
    width: ${props => props.size || '70px'};
    height: ${props => props.size || '70px'};
    line-height: ${props => props.size || '70px'};
    border-radius: 50%;
    background-color: ${props => props.backgroundColor || '#00bcd4'};
    position: absolute;
    text-align: center;
    right: 20px;
    bottom: 20px;
`;

const EmptyDivWithCenteredText = styled.div`
    color: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 1.5em;
`;

const RootWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export default { Icon, FabIcon, EmptyDivWithCenteredText, RootWrapper };
