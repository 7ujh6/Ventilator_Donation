import React from 'react';
import {CardButtonContainer, PlusIcon} from './card-button.styles';
import PlusImage from '../../assets/plus_symbol.svg';


const CardButton = () => {

    return <CardButtonContainer><PlusIcon><img src={PlusImage} alt="plus-icon"/></PlusIcon></CardButtonContainer>
}

export default CardButton;