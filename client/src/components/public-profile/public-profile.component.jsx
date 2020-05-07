import React, {useState, useContext, useEffect} from 'react';
import {fetchReferenceObject} from '../../firebase/firebase.utils';
import {UserContext} from '../../providers/user/user.provider';
import CustomButton from '../../components/custom-button/custom-button.component';
import Decks from '../../components/decks/decks.component';
import {withRouter} from 'react-router-dom';

import {PublicProfileContainer, ProfileContainer, ProfileIconContainer, DisplayNameContainer, ButtonsContainer,
     ActivityIcon} from './public-profile.styles';


const PublicProfile = ({match}) => {
    const {userId} = match.params;


    const [profileData, setProfileData] = useState({
        data: {displayName: null, displayIcon: null, activityStatus: null, activeDecks:[]}});
        
    useEffect(() => {
        async function fetchProfileData() {
           const fetchedProfileData = await fetchReferenceObject(`/users/${userId}`); 
           setProfileData(fetchedProfileData);
        }

        fetchProfileData();
    }, [])


    const {displayName, displayIcon, activityStatus, activeDecks} =  profileData.data;
    const {friendsList, blackList, addFriend, removeFriend, blockUser, unblockUser} = useContext(UserContext);


    const [friendAdded, toggleFriendAdded] = useState(async () => await friendsList.find((friend) => friend.uid === userId));
    const [userBlocked, toggleUserBlocked] = useState(async () => await blackList.find((user) => user.uid === userId));

    const handleAddAction = event => {
        if (displayName) {
            addFriend(profileData.data);
            if (userBlocked) toggleUserBlocked();
            toggleFriendAdded();
        }
    }

    const handleRemoveAction = event => {
        if (displayName) {
            removeFriend(profileData.data);
            toggleFriendAdded();
        }
    }

    const handleBlockAction = event => {
        if (displayName) {
            blockUser(profileData.data);
            if (friendAdded) toggleFriendAdded();
            toggleUserBlocked();
        }
    }

    const handleUnblockAction = event => {
        if (displayName) {
            unblockUser(profileData.data);
            toggleUserBlocked();
        }
    }


    return <PublicProfileContainer activityStatus={activityStatus}>
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


export default withRouter(PublicProfile);