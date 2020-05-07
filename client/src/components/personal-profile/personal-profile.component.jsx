import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {UserContext} from '../../providers/user/user.provider';
import {ProfileContext} from '../../providers/profile/profile.provider';
import CustomButton from '../custom-button/custom-button.component';
import Decks from '../decks/decks.component';
import FormInput from '../form-input/form-input.component';
import PopUpWindow from '../pop-up-window/pop-up-window.component';
import {ReactComponent as EditIcon} from '../../assets/pencil-edit-button.svg'
import {PersonalProfileContainer, ProfileIconContainer, ButtonsContainer, DisplayNameContainer,
CancelButtonWithTooltip, TooltipText, FormContainer, FileInput, HeaderButtonsContainer,
ImageContainer} from './personal-profile.styles'


const PersonalProfile = ({history, match}) => {
    console.log(match)
    const {currentUser: {displayIcon, displayName, activeDecks}, changeDisplayName, changeActiveDecks, changeDisplayIcon} = useContext(UserContext);
    
    const {visible, toggleVisible} = useContext(ProfileContext);

    const [replacement, setReplacement] = useState("");
    const [image, setImage] = useState(null);
    const [popUp, setPopUp] = useState(false);


    const handleSubmit = event => {
        

        if (event.key === 'Enter') {
            changeDisplayName(replacement);
            setReplacement("");
            toggleVisible();      
          }
        
    }

    const handleChange = event => {
        const {value} = event.target;
        setReplacement(value);
    }

    const handleCancel = event => {
        setReplacement("");
        toggleVisible();
    }
    const handleSelect = event => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
            setPopUp(!popUp);
        }
    }

    const cancelUpload = event => {
        setImage(null);
        setPopUp(!popUp);
    }

    const handleUpload = event => {
        changeDisplayIcon(image);
        setImage("");
        setPopUp(!popUp);
    }



    return <PersonalProfileContainer popUp={popUp}>
        <ProfileIconContainer><img alt='profile-icon' width='100' height='100' src={displayIcon} /></ProfileIconContainer>
        {visible ? <DisplayNameContainer><span style={{margin: "30px", textAlign: "center"}}>{displayName}</span><EditIcon style={{width:"15px", height:"15px", cursor:"pointer"}} onClick={toggleVisible}/></DisplayNameContainer> 
        : <FormContainer><FormInput style={{margin: "0px 0px 0px 0px"}} name="displayName" placeholder="enter new display name" type="text" handleChange={handleChange} onKeyDown={handleSubmit}  value={replacement}/>
        <CancelButtonWithTooltip onClick={handleCancel}>&#120299;<TooltipText>Cancel</TooltipText></CancelButtonWithTooltip></FormContainer>}
        {
            popUp ? <PopUpWindow><HeaderButtonsContainer><span style={{cursor: "pointer"}} onClick={cancelUpload}>&#120299;</span></HeaderButtonsContainer><ImageContainer>{image}</ImageContainer><CustomButton onClick={handleUpload} isUpload>Upload</CustomButton></PopUpWindow> : null
        }
        <ButtonsContainer>
            <CustomButton>Change Display Icon <FileInput type="file" onChange={handleSelect}/></CustomButton>
        </ButtonsContainer>
        <Decks activeDecks={activeDecks} changeActiveDecks={changeActiveDecks} isUser/>
    </PersonalProfileContainer>
}

export default withRouter(PersonalProfile);

