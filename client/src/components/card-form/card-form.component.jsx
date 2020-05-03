import React from 'react';
import {CardFormContainer} from './card-form.styles';

const CardForm = ({frontSide}) => {
    
return <CardFormContainer><h1>{frontSide ? 'Front' : 'Back'}</h1></CardFormContainer>
}

export default CardForm;