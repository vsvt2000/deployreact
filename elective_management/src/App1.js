import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'; 
import Login from './App';
import LoginForm from './Studentdashboard';
import { PublicRoute } from "./PublicRoute";
import { StudRoute } from "./StudentRoute";

class App extends Component {
    constructor(){
      super();
    }
    render() {
      return (
  <BrowserRouter>
          
              <Switch>
              <PublicRoute path="/" component={Login} exact/>
              <StudRoute path="/loginform" component={LoginForm} exact/>
  
              </Switch>
              
  </BrowserRouter>
      )}}
  export default App;