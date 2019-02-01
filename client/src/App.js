import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Calendar from "./pages/Calendar";
import HostHome from "./pages/HostHome";
import ComedianHome from "./pages/ComedianHome";
import { slide as Menu } from "react-burger-menu";
import "./style.css";
import SideBar from "./Sidebar";
import EventForm from "./pages/EventForm";
import LoginPage from "./pages/Login";
import CssBaseline from '@material-ui/core/CssBaseline';
import CalendarComponent from "./components/componentCalendar";
// import About from "./pages/About"
import Splash from "./pages/SplashPage";
//import StickyHeader from 'react-sticky-header';
// import {Header} from 'react-native-elements';


const App = () => (

 <div>
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
      <h1 class="bg-light p-4" id="head12" style={{color:'purple'}}>Chicago Comedy Open Mic</h1>
      <hr class='animated slideInLeft'style={{width:'74%', border:'10px solid purple', borderRadius:'5px'}}></hr>
      </div>
      
    </div>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        {/* <Route path="/calendar" component={Calendar} /> */}
        <Route path="/HostHome" component={HostHome} />
        <Route path="/ComedianHome" component={ComedianHome} />
        <Route path="/EventForm" component={EventForm} /> 
        <Route path="/LoginPage" component={LoginPage} />
        {/* <Route path="/About" component={About} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  <CssBaseline />
  </div>
);

export default App;
