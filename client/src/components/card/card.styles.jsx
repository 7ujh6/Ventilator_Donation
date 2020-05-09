import styled, {css} from 'styled-components';

const getCardStyles = ({frontSide}) => {
    if (frontSide) {
        return FrontSideStyles;
    }
    return BackSideStyles;
}

export const CardContainer = styled.div`
    text-align: justify;
    border: solid #a9a9a9;
    height: 125px;
    width: 125px;
    position: relative;
    top: 60px;
    right: 152px;
    cursor: pointer;
    ${'' /* overflow-y: scroll; */}
    ${getCardStyles}
`;

const FrontSideStyles = css`
    right: 0px 

`;


const BackSideStyles = css`
    right: 0px

`;
