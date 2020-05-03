import React from 'react';
import {ProfileTabContainer, ActivityIcon} from './profile-tab.styles';


const ProfileTab = ({user}) => {
    
    const {activityStatus, displayIcon, displayName} = user;
    //const {currentUser: {activityStatus, displayIcon, displayName}} = props;

    return <ProfileTabContainer activityStatus={activityStatus}>
        <img alt='default-profile'  width='30' height='30' 
            src={displayIcon}/>
        <span>{displayName}</span>
        <ActivityIcon/>
    </ProfileTabContainer>
}

export default ProfileTab;