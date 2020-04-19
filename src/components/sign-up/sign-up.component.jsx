import React from 'react';
import {auth, createUserDocument} from '../../firebase/firebase.utils';
import defaultProfileIcon from '../../assets/default-profile-icon.png';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer, SignUpTitle} from './sign-up.styles';
import CustomButton from '../custom-button/custom-button.component';



class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            console.log("SignUp calling createUser: ", auth);
            const {user} = auth.createUserWithEmailAndPassword(email, password);
            console.log("Successfully invoked auth.createUserWithEmailAndPassword ");
            const userRef = await createUserDocument (user, {displayName: displayName, displayIcon: defaultProfileIcon, friendsList: [], blackList: [], activityStatus: {value: "offline"}, activeDecks: []});
            console.log("The document that was created in SignUp: ", await userRef.get().data())
            
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    };
    

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                <FormInput type="text" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    }
}

export default SignUp;