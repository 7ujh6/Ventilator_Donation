import React from 'react';
import {SignInPageContainer, LinksContainer} from './sign-in-page.styles';
import SignInComponent from '../../components/sign-in/sign-in.component';
import {SignUpLink} from '../../reusable-styles/sign-up-link';


const SignInPage = () => {
    return <SignInPageContainer>
        <SignInComponent/>
        <LinksContainer>
            <SignUpLink to="/signup">
                Don't have an account? Sign up for free.
            </SignUpLink>
        </LinksContainer>
    </SignInPageContainer>

}

export default SignInPage;