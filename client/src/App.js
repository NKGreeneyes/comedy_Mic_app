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

const App = () => (

 <div>
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Comedy</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
 
  <Router>
    <div>



      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/HostHome" component={HostHome} />
        <Route path="/ComedianHome" component={ComedianHome} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  </div>
);

export default App;
