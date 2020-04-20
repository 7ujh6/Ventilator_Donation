import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import UserProvider from './providers/user/user.provider';
import App from './App';
import './index.css';


ReactDOM.render(
  <UserProvider><BrowserRouter><App /></BrowserRouter></UserProvider>,
  document.getElementById('root')
);
