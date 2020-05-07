import React, {createContext, useState} from 'react';
import {updateDisplayName, updateDisplayIcon, updateActivityStatus, 
    appendFriend, deleteFriend, blackListUser, whiteListUser, alterActiveDecks} from '../../firebase/firebase.utils';

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
    changeActiveDecks: () => {},
    addFriend: () => {},
    deleteFriend: () => {},
    blockUser: () => {},
    unblockUser: () => {}
});

const UserProvider = ({children}) => {

    const [displayName, setDisplayName] = useState("");
    const [displayIcon, setDisplayIcon] = useState(null);
    const [friendsList, setFriendsList] = useState([]);
    const [blackList, setBlackList] = useState([]);
    const [activeDecks, setActiveDecks] = useState([]);
    const [activityStatus, setActivityStatus] = useState("offline");
    const [currentUser, setCurrentUser] = useState(null);
    
    const changeActiveDecks = activeDecks => {
        setActiveDecks(alterActiveDecks(currentUser.id, activeDecks))
    }

    const changeDisplayName = name => {
        setDisplayName(updateDisplayName(currentUser.id, name));
        //may be redundant to set the state if the state is just going to be refreshed by onSnapshot
    }

    const changeDisplayIcon = image => {
        setDisplayIcon(updateDisplayIcon(currentUser.id, image));
    }

    const addFriend = friend => {
        unblockUser(currentUser.id, blackList, friend);
        setFriendsList(appendFriend(currentUser.id, currentUser.friendsList, friend));
    }

    const removeFriend = friend => {
        setFriendsList(deleteFriend(currentUser.id, currentUser.friendsList, friend));
    }

    const blockUser = user => {
        //if the user exists in the friendsList remove them then black list them
        deleteFriend(currentUser.id, currentUser.friendsList, user);
        setBlackList(blackListUser(currentUser.id, currentUser.blackList, user));
    }

    const unblockUser = user => {
        setBlackList(whiteListUser(currentUser.id, currentUser.blackList, user));
    }

    const changeActivityStatus = () => {
        setActivityStatus(updateActivityStatus(currentUser.id, activityStatus));
    }

    const changeCurrentUser = user => {
        setCurrentUser(user);
    }

    return <UserContext.Provider
    value={{currentUser, displayName, displayIcon, activityStatus, activeDecks, friendsList, blackList, changeActiveDecks, changeCurrentUser, changeActivityStatus, changeDisplayName, changeDisplayIcon, addFriend, removeFriend, blockUser, unblockUser}}>{children}</UserContext.Provider>
}

export default UserProvider;