import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'; 
import Login from './App';
import LoginForm from './Studentdashboard';
import { PublicRoute } from "./PublicRoute";
import { StudRoute } from "./StudentRoute";
import App11 from './departmentform';
import ChangeForm from './changeform';
import StudentForm from'./studentsform';
import TD from'./departmentdashboard';
import AD from './admindashboard';
import adminstudentlist from './adminstudentlist';
import viewelectivechange from './viewelectivechange';
import Feedbackform from './feedbackform';
import viewfeedback from './viewfeedback';
import errorpage from './ErrorPage';
import management from './electivemanagement';
import viewstudentelective from './studentviewelective';
import fviewstudentelective from './facultyviewelective';
import changemanagement from './electivechangemanagement';
import sendemail from './emailtry1';
import printpage from './htmlpdfsample';
import aviewstudentelective from './AdminFinal'
import { DeptRoute } from "./DepartmentRoute";
import { AdminRoute } from "./AdminRoute";

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
              <StudRoute path="/studentsform" component={StudentForm} exact/>
              <DeptRoute path="/departmentform" component={App11} exact/>
              <StudRoute path="/changeform" component={ChangeForm} exact/>
              <DeptRoute path="/deptdashboard" component={TD} exact/>
              <AdminRoute path="/admindashboard" component={AD} exact/>
              <AdminRoute path="/adminstudentlist" component={adminstudentlist} exact/>
              <AdminRoute path="/viewelectivechange" component={viewelectivechange} exact/>
              <StudRoute path="/feedbackforms" component={Feedbackform} exact/>
              <DeptRoute path="/viewfeedbacks" component={viewfeedback} exact/>
              <Route path="/error" component={errorpage} exact/>
              <AdminRoute path="/management" component={management} exact/>
              <StudRoute path="/tentativelist" component={viewstudentelective} exact/>
              <DeptRoute path="/finallist" component={fviewstudentelective} exact/>
              <AdminRoute path="/afinallist" component={aviewstudentelective} exact/>
              <AdminRoute path="/electivechangemanagement" component={changemanagement} exact/>
              <AdminRoute path="/sendmail" component={sendemail} exact/>
              <Route path="/printpage" component={printpage} exact/>
              <Route path="*" component={()=> "404 NOT FOUND"}/>
  
              </Switch>
              
  </BrowserRouter>
      )}}
  export default App;