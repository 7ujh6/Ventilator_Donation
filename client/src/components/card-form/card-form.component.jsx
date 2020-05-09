import React from 'react';
import {CardFormContainer} from './card-form.styles';

const CardForm = ({frontSide, handleSubmission, handleChange, tempFront, tempBack}) => {
    
return <CardFormContainer placeholder={`${frontSide ? 'Front' : 'Back'}`} 
    onChange={handleChange} value={frontSide ? tempFront : tempBack} onKeyPress={handleSubmission}></CardFormContainer>
}

export default CardForm;