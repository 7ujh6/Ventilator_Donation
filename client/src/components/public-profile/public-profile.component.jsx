import React, {useState, useContext, useEffect} from 'react';
import {fetchReferenceObject} from '../../firebase/firebase.utils';
import {UserContext} from '../../providers/user/user.provider';
import CustomButton from '../../components/custom-button/custom-button.component';
import Decks from '../../components/decks/decks.component';
import {withRouter} from 'react-router-dom';

import {PublicProfileContainer, ProfileContainer, ProfileIconContainer, DisplayNameContainer, ButtonsContainer,
     ActivityIcon, ProfileIcon} from './public-profile.styles';
// TODO fix this component to use localStorage or at least use a loading prop;
//TODO something is wrong with this code.

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

    console.log("Consoling localStorage", localStorage.getItem("user"));

    const [friendAdded, toggleFriendAdded] = useState(async () => await friendsList.find((friend) => friend.uid === userId));
    const [userBlocked, toggleUserBlocked] = useState(async () => await blackList.find((user) => user.uid === userId));

    const handleAddAction = event => {
        try {
            if (displayName) {
                addFriend(profileData.data);
                if (userBlocked) toggleUserBlocked();
                toggleFriendAdded();
            }
        } catch {
            alert("Error with adding user. Try again later");
        }
    }

    const handleRemoveAction = event => {
       try {
            if (displayName) {
                removeFriend(profileData.data);
                toggleFriendAdded();
            }
        } catch (error) {
            alert("Error with unfriending user. Try again later");
        } 
    }

    const handleBlockAction = event => {
        try {
            if (displayName) {
                blockUser(profileData.data);
                if (friendAdded) toggleFriendAdded();
                toggleUserBlocked();
            } 
        } catch (error) {
            alert("Error with blocking user. Try again later.")
        }
    }

    const handleUnblockAction = event => {
        try {
            if (displayName) {
            unblockUser(profileData.data);
            toggleUserBlocked();
        }} catch (error) {
            alert("Error with unblocking user. Try again later.");
        }
    }


    return <PublicProfileContainer activityStatus={activityStatus}>
        <ProfileContainer>
                <ProfileIconContainer>
                    <ProfileIcon alt="profile-icon" src={displayIcon} height="100" width="100"/>
                </ProfileIconContainer>
                <ActivityIcon/>
            <DisplayNameContainer>{displayName}</DisplayNameContainer>
        </ProfileContainer>
        <ButtonsContainer>
            {!friendAdded ? <CustomButton onClick={handleAddAction}>Add Friend</CustomButton> : <CustomButton onClick={handleRemoveAction}>Unfriend</CustomButton>}
            {!userBlocked ? <CustomButton onClick={handleBlockAction}>Block User</CustomButton> : <CustomButton onClick={handleUnblockAction}>Unblock User</CustomButton>}
            <CustomButton>Chat</CustomButton>
        </ButtonsContainer>
        
        <Decks isPublicProfile activeDecks={activeDecks}/>
    </PublicProfileContainer>
}


export default withRouter(PublicProfile);