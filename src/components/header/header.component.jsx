import React from 'react';
import {HeaderContainer, LogoContainer, DirectoryContainer, DirectoryLink} from './header.styles';
import {ReactComponent as Logo} from '../../assets/oxygen.svg';
//TODO replace with actual site svg


const Header = () => {
    return <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <DirectoryContainer>
            <DirectoryLink to="/donate">Donate Now</DirectoryLink>
            <DirectoryLink to="/aboutus">Learn About Our Cause</DirectoryLink>
        </DirectoryContainer>
    </HeaderContainer>
}

export default Header;


//Respitory Aid America
