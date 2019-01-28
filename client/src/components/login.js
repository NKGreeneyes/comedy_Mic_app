import React from "react";

const Login = props => (
  // multiple buttons could be added here for differnt auth types
  <>
    <button
      className="btn btn-default navbar-btn mr-1"
      onClick={() => props.login("Google")}
    >
      Google Login
    </button>
    <button
      className="btn btn-default navbar-btn"
      onClick={() => props.login("Facebook")}
    >
      Facebook Login
    </button>
  </>
);

export default Login;
