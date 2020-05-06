import React, {createContext, useState} from 'react';

export const DeckContext = createContext({
    visible: false,
    toggleVisible: () => {},
    popUp: false,
    triggerPopUp: () => {}
});

const DeckProvider = ({children}) => {
    const [visible, setVisible] = useState(false);
    const [popUp, setPopUp] = useState (false);
    const toggleVisible = () => {setVisible(!visible)}
    const triggerPopUp = () => {setPopUp(!popUp)}

    return <DeckContext.Provider value={{visible, popUp, toggleVisible, triggerPopUp}}>{children}</DeckContext.Provider>
}

export default DeckProvider;