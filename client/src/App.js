import React, {useContext, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component.jsx';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import AboutUsPage from './pages/about-us-page/about-us-page.component';
import HowToUsePage from './pages/how-to-use-page/how-to-use-page.component.jsx';
import PersonalProfilePage from './pages/personal-profile-page/personal-profile-page.component';
import PublicProfilePage from './pages/public-profile-page/public-profile-page.component';
import BrowseFriendsPage from './pages/browse-friends-page/browse-friends-page.component';
import {auth, createUserDocument} from './firebase/firebase.utils';
import {UserContext} from './providers/user/user.provider';
import defaultProfileIcon from './assets/default-profile-icon.png';
import ProfileDisplayProvider from './providers/profile-display/profile-display.provider';
import ProfileProvider from './providers/profile/profile.provider.jsx';
import DeckProvider from './providers/deck/deck.provider.jsx';
import './App.css';

//import Redirect -> is there an option that waits a duration before redirecting?



const App = ({match}) => {
  const {currentUser, changeCurrentUser} = useContext(UserContext);
  console.log(match);


  useEffect(() => {
    //auth.signOut();
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth, {displayIcon: defaultProfileIcon, friendsList: [], blackList: [], activityStatus: {value: "online"}, activeDecks: []});
        await userRef.update({activityStatus: "online"});
        userRef.onSnapshot(snapShot => {changeCurrentUser({id: snapShot.id, ...snapShot.data()})});
      }

      else
        changeCurrentUser(userAuth);
    })
  }, [])

    
  return <ProfileDisplayProvider>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/"/>) : (<SignInPage/>)}/>
          <Route exact path="/signup" render={() => currentUser? (<Redirect to="/getstarted"/>) : (<SignUpPage/>)}/>
          <Route exact path="/aboutus" component={AboutUsPage}/>
          <Route exact path="/howtouse" render={() => !currentUser ? (<Redirect to="/signin"/>) : (<HowToUsePage/>)}/>
          <Route exact path="/getstarted" component={HowToUsePage}/>
          <Route exact path="/browseusers" component={BrowseFriendsPage}/>
          <ProfileProvider>
          <DeckProvider>
            <Route exact path="/profile" component={PersonalProfilePage} />
            <Route path="/profile/:userId" component={PublicProfilePage} />
          </DeckProvider>
          </ProfileProvider>
        </Switch>
      </ProfileDisplayProvider>
      
}

export default App;
