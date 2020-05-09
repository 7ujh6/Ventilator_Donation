import React, {useContext} from 'react';
import {UserContext} from '../../providers/user/user.provider';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {ProfileIconContainer} from './profile-icon.styles';

const ProfileIcon = () => {
    const {toggleHidden} = useContext(ProfileDisplayContext);
    const {currentUser : {displayIcon}} = useContext(UserContext);


return <ProfileIconContainer onClick={toggleHidden}>
    <img alt='default-profile'  style={{borderRadius: "50%"}} width='45' height='45' 
    src={displayIcon}/></ProfileIconContainer>
}

export default ProfileIcon;
