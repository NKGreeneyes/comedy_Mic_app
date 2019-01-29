import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SideBar from "./sidebar";

// function App() {
//   return (
//     <div id="App">
//       <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> </div>
// }

export default props => {
  return (
        <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> </div>
  );
};