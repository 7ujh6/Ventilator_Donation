import styled, {css} from 'styled-components';

const getCardStyles = ({frontSide}) => {
    if (frontSide) {
        return FrontSideStyles;
    }
    return BackSideStyles;
}

export const CardContainer = styled.div`
    text-align: justify;
    border: solid black;
    height: 125px;
    width: 125px;
    overflow-y: scroll;
    ${getCardStyles}
`;

const FrontSideStyles = css`

`;


const BackSideStyles = css`

`;
