import React, {useContext} from 'react';
import {HeaderContainer, LogoContainer, DirectoryContainer, DirectoryLink, DirectoryLinksContainer,  ProfileContainer} from './header.styles';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {UserContext} from '../../providers/user/user.provider';
import ProfileIcon from '../profile-icon/profile-icon.component';
import ProfileDropdown from '../profile-dropdown/profile-dropdown.component';
import WebsiteLogo  from '../../assets/logo.svg';
//import {ReactComponent as Logo} from '../../assets/oxygen.svg';
//TODO replace with actual site svg


const Header = () => {
    const {currentUser} = useContext(UserContext);
    const {hidden} = useContext(ProfileDisplayContext);
    return <HeaderContainer>
        <LogoContainer to="/">
            <img  alt="logo" src={WebsiteLogo} height="70" width="70"/>
        </LogoContainer>
        <DirectoryContainer>
            <DirectoryLinksContainer>
                <DirectoryLink to="/howtouse">How To Use</DirectoryLink>
                {currentUser ? <DirectoryLink style={{visibility: "hidden"}} to="/aboutus">About Us</DirectoryLink> : null}
           
            {
                //on sign out, current user will be set to null and the activity status of the user will be set to offline
                !currentUser ? (<DirectoryLink to="/signin">Sign In</DirectoryLink>) :
                (<ProfileContainer><ProfileIcon/>{hidden ? null : <ProfileDropdown/>}</ProfileContainer>)
            }
            </DirectoryLinksContainer>
        </DirectoryContainer>
    </HeaderContainer>
}



export default Header;


//Respitory Aid America
