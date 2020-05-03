import React from 'react';
import TabHeader from  '../../components/tab-header/tab-header.component';
import BrowseFriends from '../../components/browse-friends/browse-friends.component'
import {BrowseFriendsPageContainer} from './browse-friends-page.styles';

const BrowseFriendsPage = () => {
    //could pass an array of tab titles into tab header and have tab header render off tabs based on the titles
    //but for that I would have to utilize another context

    //Idea: <TabHeader>{bannersArray}</TabHeader> --(inside TabBanner)--> ({children}){children.forEach()}
    //or, we can just pass the banners as props; can store the banners as an object with an array field and import it
    
    return <BrowseFriendsPageContainer>
            <TabHeader/>
            <BrowseFriends/>
    </BrowseFriendsPageContainer>
}

export default BrowseFriendsPage