import React, {useState, useContext} from 'react';
import {fetchReferenceObject} from '../../firebase/firebase.utils';
import {UserContext} from '../../providers/user/user.provider';
import CustomButton from '../../components/custom-button/custom-button.component';
import Decks from '../../components/decks/decks.component';

import {PublicProfileContainer, ProfileContainer, ProfileIconContainer, DisplayNameContainer, ButtonsContainer,
     ActivityIcon} from './public-profile.styles';


const PublicProfile = ({userId}) => {

    const userReference = fetchReferenceObject(`users/${userId}`);
    
    const {displayName, displayIcon, activityStatus, activeDecks} =  userReference;
    const {friendsList, blackList, addFriend, removeFriend, blockUser, unblockUser} = useContext(UserContext);

    const [friendAdded, toggleFriendAdded] = useState(friendsList.find((friend) => friend === userReference));
    const [userBlocked, toggleUserBlocked] = useState(blackList).find((user) => user === userReference);

    const handleAddAction = event => {
        addFriend(userReference);
        if (userBlocked) toggleUserBlocked();
        toggleFriendAdded();
    }

    const handleRemoveAction = event => {
        removeFriend(userReference);
        toggleFriendAdded();
    }

    const handleBlockAction = event => {
        blockUser(userReference);
        if (friendAdded) toggleFriendAdded();
        toggleUserBlocked();
    }

    const handleUnblockAction = event => {
        unblockUser(userReference);
    }


    return<PublicProfileContainer activityStatus={activityStatus}>
        <ProfileContainer><ProfileIconContainer><img alt="profile-icon" src={displayIcon} height="100" width="100"/></ProfileIconContainer>
            <ActivityIcon/></ProfileContainer>
        <DisplayNameContainer>{displayName}</DisplayNameContainer>
        <ButtonsContainer>
            {!friendAdded ? <CustomButton onClick={handleAddAction}>Add Friend</CustomButton> : <CustomButton onClick={handleRemoveAction}>Unfriend</CustomButton>}
            {!userBlocked ? <CustomButton onClick={handleBlockAction}>Block User</CustomButton> : <CustomButton onClick={handleUnblockAction}>Unblock User</CustomButton>}
            <CustomButton>Chat</CustomButton>
        </ButtonsContainer>
        <Decks activeDecks={activeDecks}/>
    </PublicProfileContainer> 
}

export default PublicProfile;