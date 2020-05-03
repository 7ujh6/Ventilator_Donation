import styled from 'styled-components';

export const DecksContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CancelContainer = styled.div`
    cursor: pointer;
    position: relative;
    bottom: 20px;
    left: 140px;
    border-radius: 50%;
    width: 15%;
    height: 20px;
    text-align: center;
    
    &:hover {
        background: red;
    }
`;

export const ScrollWindow = styled.div`
    margin-top: 100px;
    height: 525px;
    width: 525px;
    border: 2px solid black;
`;

export const DeckDisplay = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    overflow-y: scroll;

    & > div {
        margin-bottom: 30px;
    }

`;

export const DeckCell = styled.div`

`;

export const DisplayTagWithTooltip = styled.div`
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    left: 70px;

    span {
        visibility: hidden;
        cursor: pointer;
        width: 100px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        top: 20px;
        right: -25px;
        z-index: 1;
    }

    &:hover {
        & span {
            visibility: visible
        }
    }
    
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    justify-content: column;
    text-align: right;
`;