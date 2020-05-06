import React from 'react';
import {PopUpWindowContainer, HeaderButtonsContainer} from './pop-up-window.styles';

const PopUpWindow = (props) => {
    return <><HeaderButtonsContainer onClick={props.handlePopUpClose}><span>&#120299;</span></HeaderButtonsContainer><PopUpWindowContainer {...props}></PopUpWindowContainer></>;
}

export default PopUpWindow;