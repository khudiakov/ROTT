import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3px auto;
    padding: 10px;
    z-index: 0;
    border-radius: 3px;
    border: 1px solid #00BCD4;
    cursor: pointer;
    opacity: ${props => props.selected ? 1 : 0.6};
    position: relative;
    
    background: ${props => props.active ? props.muiTheme.palette.primary1Color : 'white'};
    color: ${props => props.active ? 'white' : props.muiTheme.palette.primary1Color};

    transition: background 0.5s ease, color 0.3s ease, opacity 0.5s ease;

    &:hover {
        opacity: 1;
    }

    > h2 {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h2, h3 {
        margin: 0;
    }

    .material-icons {
        color: ${props => props.active ? 'white' : props.muiTheme.palette.primary1Color} !important;
    }
    .icon__button {
        z-index: 1;
    }
`;

export default muiThemeable()(StyledProjectItem);