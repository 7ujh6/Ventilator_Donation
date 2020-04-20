import React, {useContext} from 'react';
import {HeaderContainer, LogoContainer, DirectoryContainer, DirectoryLink, ProfileContainer} from './header.styles';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {UserContext} from '../../providers/user/user.provider';
import ProfileIcon from '../profile-icon/profile-icon.component';
import ProfileDropdown from '../profile-dropdown/profile-dropdown.component';
//import {ReactComponent as Logo} from '../../assets/oxygen.svg';
//TODO replace with actual site svg


const Header = () => {
    const currentUser = useContext(UserContext);
    const {hidden} = useContext(ProfileDisplayContext);
    return <HeaderContainer>
        <LogoContainer to="/">
            <span>logo</span>
            {/* <Logo className="logo"/> */}
        </LogoContainer>
        <DirectoryContainer>
            {/* <DirectoryLink to="/donate">Donate Now</DirectoryLink> */}
            <DirectoryLink to="/howtouse">How To Use</DirectoryLink>
            <DirectoryLink to="/aboutus">About Us</DirectoryLink>
            {
                //on sign out, current user will be set to null and the activity status of the user will be set to offline
                !currentUser ? (<DirectoryLink to="/signin">Sign In</DirectoryLink>) :
                (<ProfileContainer><ProfileIcon/>{hidden ? null : <ProfileDropdown/>}</ProfileContainer>)
            }
        </DirectoryContainer>
    </HeaderContainer>
}



export default Header;


//Respitory Aid America
