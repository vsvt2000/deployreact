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
import Adminstudentlist from './adminstudentlist';
import Viewelectivechange from './viewelectivechange';
import Feedbackform from './feedbackform';
import viewfeedback from './viewfeedback';
import Errorpage from './ErrorPage';
import Management from './electivemanagement';
import Viewstudentelective from './studentviewelective';
import Fviewstudentelective from './facultyviewelective';
import Changemanagement from './electivechangemanagement';
import Sendemail from './emailtry1';
import Aboutus from './htmlpdfsample';
import Aviewstudentelective from './AdminFinal'
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
              <AdminRoute path="/adminstudentlist" component={Adminstudentlist} exact/>
              <AdminRoute path="/viewelectivechange" component={Viewelectivechange} exact/>
              <StudRoute path="/feedbackforms" component={Feedbackform} exact/>
              <DeptRoute path="/viewfeedbacks" component={viewfeedback} exact/>
              <Route path="/error" component={Errorpage} exact/>
              <AdminRoute path="/management" component={Management} exact/>
              <StudRoute path="/tentativelist" component={Viewstudentelective} exact/>
              <DeptRoute path="/finallist" component={Fviewstudentelective} exact/>
              <AdminRoute path="/afinallist" component={Aviewstudentelective} exact/>
              <AdminRoute path="/electivechangemanagement" component={Changemanagement} exact/>
              <AdminRoute path="/sendmail" component={Sendemail} exact/>
              <Route path="/printpage" component={Aboutus} exact/>
              <Route path="*" component={()=> "404 NOT FOUND"}/>
  
              </Switch>
              
  </BrowserRouter>
      )}}
  export default App;