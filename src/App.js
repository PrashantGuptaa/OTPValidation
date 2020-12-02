import React from "react";
import "./styles.css";
import {Redirect, Switch , Route} from 'react-router-dom';
import Login from './components/login';
import Header from './components/header';
import OtpValidation from './components/otpValidation';
import Home from './home';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path = {'/home'} component = {Home}/>
      <Route path = {'/otpValidation'} component = {OtpValidation}/>
      <Route path = {'/'} component = {Login}/>
      <Redirect to = '/'/>
      </Switch>
     </div>
  );
}
