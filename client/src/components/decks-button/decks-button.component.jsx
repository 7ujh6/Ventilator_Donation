import React from 'react';
import PlusImage from '../../assets/plus_symbol.svg';
import {DecksButtonContainer, LeftPane, MiddlePane, RightPane,
    LeftAddPane, MiddleAddPane, RightAddPane, PlusIcon} from './decks-button.styles';

const DecksButton = ({noPlus, isAdd}) => {
    return <DecksButtonContainer> {!isAdd ? <><LeftPane/><MiddlePane/><RightPane/></> : <><LeftAddPane/><MiddleAddPane/><RightAddPane/>{!noPlus ? <PlusIcon><img src={PlusImage} alt="plus-icon"/></PlusIcon> : null}</>}</DecksButtonContainer>
}

export default DecksButton;