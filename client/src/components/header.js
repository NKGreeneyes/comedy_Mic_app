// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import axios from "axios";
// import firebase from "../firebase";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     uid: null,
//     displayName: null
//   };
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.authHandler({ user });
//       }
//     });
//   }

//   authHandler = authData => {
//     const { uid, displayName } = authData.user;
//     axios.get(`/api/user/${uid}`).then(res => {
//       if (res.data.length === 0) {
//         axios.post("/api/user/create", { uid }).then(res => {
//           this.setState({
//             uid,
//             displayName
//           });
//         });
//       } else {
//         this.setState({
//           uid,
//           displayName
//         });
//       }
//     });
//     //check if user exists in mongo db, if not create user, if so set state equal to user
//     //set the state of the inventory to reflect current user
//   };


//   render() {

//     return (
//       <div>

//           starter nav for functionality<br></br>

//           {message}
//           {authButtons}

//           <Link to='/'>Home</Link> <br></br>
//           <Link to='/calendar'>calendar</Link><br></br>    
//           <Link to="/hosthome">Host Home</Link><br></br>
//           <Link to='/comedianhome'>Comedian Home</Link><br></br>
//           <Link to='/EventForm'>Event Form</Link>
          
//         {/* <Login></Login> */}

//           <h1>{this.props.text}</h1>
//           </div>
//     );
//   }
// }

// export default Header;