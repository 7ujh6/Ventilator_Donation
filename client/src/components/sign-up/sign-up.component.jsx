import React, {useState, useContext} from 'react';
import {auth, createUserDocument} from '../../firebase/firebase.utils';
import defaultProfileIcon from '../../assets/default-profile-icon.png';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer, SignUpTitle} from './sign-up.styles';
import CustomButton from '../custom-button/custom-button.component';
import {UserContext} from '../../providers/user/user.provider';
import faker from 'faker';


const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({displayName: "", email: "", password: "", confirmPassword: ""})
    const {displayName, email, password, confirmPassword} = userCredentials;
    const {changeCurrentUser} = useContext(UserContext);


    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            const userRef = await createUserDocument(user, {displayName: displayName, displayIcon: defaultProfileIcon, friendsList: [], blackList: [], activityStatus: {value: "online"}, activeDecks: []});
            changeCurrentUser((await userRef.get()).data());
            setUserCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value})
    };

    const createFakeCredentials = async event => {
        
        try {
            const fakeName = faker.name.findName(), fakeEmail = faker.internet.email(),
        fakePassword = "password";
        const {user} = await auth.createUserWithEmailAndPassword(fakeEmail, fakePassword);
        const userRef = await createUserDocument(user, {displayName: fakeName, displayIcon: defaultProfileIcon, friendsList: [], blackList: [], activityStatus: {value: "online"}, activeDecks: []});
        changeCurrentUser((await userRef.get()).data());
        } catch (error) {
            console.log(error);
        }
    }
    

    return <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required/>
            <FormInput type="text" name="email" value={email} onChange={handleChange} label="Email" required/>
            <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required/>
            <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required/>
            <CustomButton style={{margin:"60px 30px 30px 30px"}} type="submit">SIGN UP</CustomButton>
        </form>
        <CustomButton style={{margin: "30px"}} onClick={createFakeCredentials}> GUEST SIGNUP</CustomButton>
    </SignUpContainer>
    
}

export default SignUp;