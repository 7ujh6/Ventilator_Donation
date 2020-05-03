import React, {useState, useContext} from 'react';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';
import {UserContext} from '../../providers/user/user.provider';

const SignIn = () => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials;
    const {changeActivityStatus} = useContext(UserContext);

   const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            changeActivityStatus();
            setCredentials({email: "", password: ""})
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }
    
            
    return <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with you email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email" handleChange={handleChange} value={email} label="email" required />
            <FormInput name="password" type="password" handleChane={handleChange} value={password} label="password" required />
            <ButtonsContainer>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
            </ButtonsContainer>
        </form>
    </SignInContainer>
}


export default SignIn;