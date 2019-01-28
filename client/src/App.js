import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Calendar from "./pages/Calendar";
import HostHome from "./pages/HostHome";
import ComedianHome from "./pages/ComedianHome";
import dotenv from "dotenv";
dotenv.config();

const App = () => (
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
);

export default App;
