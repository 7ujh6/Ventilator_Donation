import React, {useContext} from 'react';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {

    constructor() {
        super();


        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""})
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const {email, password} = this.state;
        
        return <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with you email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" handleChange={this.handleChange} value={email} label="email" required />
                <FormInput name="password" type="password" handleChane={this.handleChange} value={password} label="password" required />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    }
}

export default SignIn;