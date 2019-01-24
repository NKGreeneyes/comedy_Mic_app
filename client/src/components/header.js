import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calendar from '../pages/Calendar/';
import HostHome from '../pages/HostHome/';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

          starter nav for functionality<br></br>
          <Link to='/'>Home</Link> <br></br>
          <Link to='/calendar'>calendar</Link><br></br>    
          <Link to="/hosthome">Host Home</Link><br></br>
          <Link to='/comedianhome'>Comedian Home</Link>
          
     {/* What up test git pull  */}

          <h1>{this.props.text}</h1>
          </div>
    );
  }
}

export default Header;