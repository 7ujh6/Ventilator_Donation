import React, {useState} from 'react';
import {CardContainer} from './card.styles';

const Card = ({card}) => {
    const [side, setSide] = useState(true)
    const flipSides = () => {
        setSide(!side)
    }


    //probably going to need a little more styling here? Potentially if I want the card to look extra pretty
    return <CardContainer onClick={flipSides} frontSide={side}><p>{side ? card.frontText : card.backText}</p></CardContainer>
}


export default Card;