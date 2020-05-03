import React, {createContext, useState} from 'react';

export const DeckContext = createContext({
    visible: false,
    toggleVisible: () => {}
});

const DeckProvider = ({children}) => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {setVisible(!visible)}

    return <DeckContext.Provider value={{visible, toggleVisible}}>{children}</DeckContext.Provider>
}

export default DeckProvider;