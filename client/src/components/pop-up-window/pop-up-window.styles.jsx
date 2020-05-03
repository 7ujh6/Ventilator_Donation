import styled, {css} from 'styled-components';

const getPopUpStyles = (props) => {
    if (props.isCardPopUp) {
        return CardPopUpStyles;
    }

    return RegularStyles;
}

export const PopUpWindowContainer = styled.div`
    ${getPopUpStyles}
`;

const CardPopUpStyles = css`
    height: 400px;
    width: 400px
    z-index: 3;
    background-color: white;
    position: sticky;
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
    background-color: white;
    display: flex;
    flex-position: column;
    position: sticky;
`;