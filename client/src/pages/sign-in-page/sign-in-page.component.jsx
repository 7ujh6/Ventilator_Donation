import React from 'react';
import {SignInPageContainer, LinksContainer, SignUpLink} from './sign-in-page.styles';
import SignInComponent from '../../components/sign-in/sign-in.component';


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