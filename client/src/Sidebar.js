import React from "react";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} isOpen={ false } style={{color:'white'}}>
      <a className="menu-item" href="/">
        Home
      </a>

      {/* <a className="menu-item" href="/calendar">
        Calendar
      </a> */}

      <a className="menu-item" href="/HostHome">
        Host Home
      </a>

      <a className="menu-item" href="/ComedianHome">
        Comedian Home
      </a>

      <a className="account-login" href="/LoginPage">
        Account Management
      </a>
    </Menu>
  );
};