import React, {createContext, useState} from 'react';
import {updateDisplayName, updateDisplayIcon, appendFriend, deleteFriend} from '../../firebase/firebase.utils';
import defaultProfileIcon from '../../assets/default-profile-icon.png';

export const UserContext = createContext({
    id: null,
    displayName: "",
    displayIcon: null,
    friendsList: [],
    blackList: [],
    activityStatus: "offline",
    activeDecks: [], //array of objects -> {name, language, [items]}; items-> {frontSide="", backSide=""}
    changeDisplayName: () => {},
    changeDisplayIcon: () => {},
    addFriend: () => {},
    deleteFriend: () => {},
    blockFriend: () => {},

});

const UserProvider = ({children}) => {

    const [displayName, setDisplayName] = useState("");
    const [displayIcon, setDisplayIcon] = useState(null);
    const [friendsList, setFriendsList] = useState([]);
    const [blackList, setBlackList] = useState([]);
    const [activityStatus] = useState("offline");

    const changeDisplayName = name => {
        setDisplayName(updateDisplayName(this.id, name));
        //may be redundant to set the state if the state is just going to be refreshed by onSnapshot
    }

    const changeDisplayIcon = image => {
        setDisplayIcon(updateDisplayIcon(this.id, image));
    }

    const addFriend = friend => {
        setFriendsList(appendFriend(this.id, friendsList, friend));
    }

    const removeFriend = friend => {
        setFriendsList(deleteFriend(this.id, friendsList, friend));
    }

    return <UserContext.Provider
    value={{displayName, displayIcon, activityStatus, friendsList, changeDisplayName, changeDisplayIcon, addFriend, removeFriend}}>{children}</UserContext.Provider>
}

export default UserProvider;