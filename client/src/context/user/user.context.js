import {createContext} from 'react';

const UserContext = createContext({
    id: null,
    displayName: "",
    displayIcon: "",
    friendsList: [],
    blackList: [],
    activityStatus: {value: "offline"},
    activeDecks: [], //array of objects -> {name, language, [items]}; items-> {frontSide="", backSide=""}
    changeDisplayName: () => {},
    changeDisplayIcon: () => {},
    addFriend: () => {},
    deleteFriend: () => {},
    blockFriend: () => {},

});

export default UserContext;