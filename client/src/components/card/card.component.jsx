import React from 'react';
import {CardContainer} from './card.styles';

const Card = ({frontSide, card}) => {
    //probably going to need a little more styling here? Potentially if I want the card to look extra pretty
    return <CardContainer frontSide = {frontSide}><p>{frontSide ? card.frontSide : card.backSide}</p></CardContainer>
}


export default Card;