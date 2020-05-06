import styled, {css} from 'styled-components';

const getPopUpStyles = (props) => {

    if (props.isCardPopUp) {
        return CardPopUpStyles;
    }

    return RegularStyles;
}

export const PopUpWindowContainer = styled.div`
    height: 600px;
    background-color: white;
    border: solid 2px #d5dcdc;
    position: relative;
    margin-top: 100px;
    z-index: 3;
    ${getPopUpStyles}
`;

export const CardDisplay = styled.div`


`
export const HeaderButtonsContainer = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    top: 140px;
    right: -400px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 4;

    &:hover {
        background: red;
    }
`;

const CardPopUpStyles = css`
   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    overflow-y: scroll;
    & > div {
        margin-bottom: 30px;
    }
`;

const RegularStyles = css`
    z-index: 1;
    display: flex;
    flex-position: column;
    position: sticky;
`;