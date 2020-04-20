import React, {createContext, useState} from 'react';
import {updateDisplayName, updateDisplayIcon, updateActivityStatus, appendFriend, deleteFriend} from '../../firebase/firebase.utils';
import defaultProfileIcon from '../../assets/default-profile-icon.png';

export const UserContext = createContext({
    currentUser: {
        id: null,
        displayName: "",
        displayIcon: null,
        friendsList: [],
        blackList: [],
        activityStatus: "offline",
        activeDecks: [], //array of objects -> {name, language, [items]}; items-> {frontSide="", backSide=""}
    },
    changeCurrentUser: () => {},
    changeDisplayName: () => {},
    changeDisplayIcon: () => {},
    changeActivityStatus: () => {},
    addFriend: () => {},
    deleteFriend: () => {},
    blockFriend: () => {},
});

const UserProvider = ({children}) => {

    const [displayName, setDisplayName] = useState("");
    const [displayIcon, setDisplayIcon] = useState(null);
    const [friendsList, setFriendsList] = useState([]);
    const [blackList, setBlackList] = useState([]);
    const [activityStatus, setActivityStatus] = useState("offline");
    const [currentUser, setCurrentUser] = useState(null);

    const changeDisplayName = name => {
        setDisplayName(updateDisplayName(this.id, name));
        //may be redundant to set the state if the state is just going to be refreshed by onSnapshot
    }

    const changeDisplayIcon = image => {
        setDisplayIcon(updateDisplayIcon(this.id, image));
    }

    const addFriend = friend => {
        setFriendsList(appendFriend(this.id, this.friendsList, friend));
    }

    const removeFriend = friend => {
        setFriendsList(deleteFriend(this.id, this.friendsList, friend));
    }

    const changeActivityStatus = () => {
        setActivityStatus(updateActivityStatus(this.id, this.activityStatus));
    }

    const changeCurrentUser = user => {
        setCurrentUser(user);
    }

    return <UserContext.Provider
    value={{currentUser, displayName, displayIcon, activityStatus, friendsList, changeCurrentUser, changeActivityStatus, changeDisplayName, changeDisplayIcon, addFriend, removeFriend}}>{children}</UserContext.Provider>
}

export default UserProvider;