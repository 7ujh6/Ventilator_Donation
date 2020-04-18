import React, {useContext} from 'react';
import {UserContext} from '../../providers/user/user.provider';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {ProfileIconContainer} from './profile-icon.styles';

const ProfileIcon = () => {
    const {toggleHidden} = useContext(ProfileDisplayContext);
    const {displayIcon} = useContext(UserContext);

    return <ProfileIconContainer onclick={toggleHidden}>{displayIcon}</ProfileIconContainer>
}

export default ProfileIcon;
