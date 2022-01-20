import React from 'react';
import { ActivityIcon, ImageWrapper, ProfileTabContainer} from './profile-tab.styles';

const ProfileTab = ({user, handleClick}) => {
    
    const {activityStatus, displayIcon, displayName, uid} = user;
    // console.log(user);

    // TODO turn button text into a toolTip that is displayed when hovering over the profile

    return <ProfileTabContainer onClick={(e) => handleClick({ key: uid})} activityStatus={activityStatus}>
        <ImageWrapper>
            <img alt='default-profile'  width='50' height='50' src={displayIcon}/>
        </ImageWrapper>
        <span>{displayName ? displayName : 'N/A'}</span>
        <ActivityIcon activityStatus={activityStatus}/>
    </ProfileTabContainer>
}

export default ProfileTab;