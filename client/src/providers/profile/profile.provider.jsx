import React, {createContext, useState} from 'react';

export const ProfileContext = createContext({
    visible: true,
    toggleVisible: () => {}
});

const ProfileProvider = ({children}) => {

    const [visible, setVisible] = useState(true);
    const toggleVisible = () => {setVisible(!visible)}

    return <ProfileContext.Provider value={{visible, toggleVisible}}>{children}</ProfileContext.Provider>
}


export default ProfileProvider;