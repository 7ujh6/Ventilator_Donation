import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component.jsx';
import DonationPage from './pages/donation-page/donation-page.component';
import AboutUsPage from './pages/about-us-page/about-us-page.component';

import './App.css';

//import Redirect -> is there an option that waits a duration before redirecting?



class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/donate" component={DonationPage}/>
        <Route exact path="/aboutus" component={AboutUsPage}/>
      </Switch>
    </div>

  }
}



export default App;
