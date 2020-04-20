import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component.jsx';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import AboutUsPage from './pages/about-us-page/about-us-page.component';
import HowToUsePage from './pages/how-to-use-page/how-to-use-page.component.jsx';
import {auth, createUserDocument} from './firebase/firebase.utils';
import {UserContext} from './providers/user/user.provider';
import defaultProfileIcon from './assets/default-profile-icon.png';
import './App.css';
import ProfileDisplayProvider from './providers/profile-display/profile-display.provider';

//import Redirect -> is there an option that waits a duration before redirecting?



class App extends React.Component {

  constructor() {
    super();

    this.state = {currentUser: null}
  }


  unsubscribeFromAuth = null;

  componentDidMount() {

    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth, {displayIcon: defaultProfileIcon, friendsList: [], blackList: [], activityStatus: {value: "online"}, activeDecks: []});
        await userRef.update({activityStatus: "online"});
        userRef.onSnapshot(snapShot => {this.setState({currentUser: {id: snapShot.id, ...snapShot.data()}})});
      }

      else
        this.setState({currentUser: userAuth});
    })
  }


  render() {
    return <ProfileDisplayProvider>
          <Header/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/signin" render={() => this.state.currentUser ? (<Redirect to="/"/>) : (<SignInPage/>)}/>
            <Route exact path="/signup" render={() => this.state.currentUser ? (<Redirect to="/getstarted"/>) : (<SignUpPage/>)}/>
            <Route exact path="/aboutus" component={AboutUsPage}/>
            <Route exact path="/howtouse" render={() => !this.state.currentUser ? (<Redirect to="/signin"/>) : (<HowToUsePage/>)}/>
            <Route exact path="/getstarted" component={HowToUsePage}/>
          </Switch>
        </ProfileDisplayProvider>
      
  }
}

App.contextType = UserContext;


export default App;
