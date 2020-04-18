import {createContext} from 'react';

const ProfileDisplayContext = createContext({
    hidden: true,
    toggleHidden: () => {}
});

export default ProfileDisplayContext;