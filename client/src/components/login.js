import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

          <p>this will be a log-in component embedded in the navbar
          </p>
    </div>
    );
  }
}

export default Login;