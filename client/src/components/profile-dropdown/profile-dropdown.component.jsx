import React, {useContext, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import ProfileTab from '../profile-tab/profile-tab.component';
import {ProfileDropdownContainer, LabelContainer, DropdownLink} from './profile-dropdown.styles';
import {UserContext} from '../../providers/user/user.provider';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {auth} from '../../firebase/firebase.utils';


const ProfileDropdown = ({history}) => {

    const {currentUser, friendsList} = useContext(UserContext);
    const {toggleHidden, activeFriends, fetchActiveFriends} = useContext(ProfileDisplayContext);

    console.log(friendsList);
    console.log("The user in storage", localStorage.getItem("user"));
    console.log("The user", currentUser);



    //I'm pretty sure this is wrong somehow but I have yet to find out 
    useEffect (() => {
    //    friendsList.map(async friend => `users/${(friend.currentUser.uid)}`.get().child('activityStatus').onSnapshot(() => {
    //        fetchActiveFriends(friendsList);
    //        console.log("I am being called within profile-dropdown");
    //     }))
    }, [])


    return <ProfileDropdownContainer>
        <LabelContainer onClick={() => { 
            console.log("I am being reached!");
            toggleHidden();
            history.push('/');
            return auth.signOut()}}>Signout</LabelContainer>
        {
            activeFriends.forEach(friend =>
                {
                    return <ProfileTab friend={friend} onClick={() => {
                        toggleHidden();
                        history.push(`/profile/:userId/${friend.currentUser.uid}`)}}/>
                }
            )
        }
        <DropdownLink onClick={toggleHidden} to="/browseusers">Browse Users</DropdownLink>
        <DropdownLink onClick={toggleHidden} to="/profile">View Profile</DropdownLink>
    </ProfileDropdownContainer>;
}

export default withRouter(ProfileDropdown);