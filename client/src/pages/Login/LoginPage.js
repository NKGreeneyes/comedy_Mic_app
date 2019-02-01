import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'mcomedy-project-login.firebaseapp.com',
  databaseURL: "https://comedy-project-login.firebaseio.com"
};
firebase.initializeApp(config);

class LoginPage extends Component {
  state = { 
    isSignedIn: false,
    // theName: firebase.auth().currentUser.displayName
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : 'process.env.FACEBOOK_API',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : 'v3.2'
  //   });
      
  //   FB.AppEvents.logPageView();   
      
  // };

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));

  render() {
    // if (firebase.auth().currentUser.displayName === "Dan Staggs") {
    //   console.log("nice");
    //   } else {
    //     console.log("bummer");
    //     }

    // const fauxID = this.firebase.auth().currentUser.displayName;
    // console.log(fauxID);

    var thingToShow;

    if (this.state.isSignedIn 
      // &&
      // firebase.auth().currentUser.displayName
      // this.state.theName==="What's For Breakfast? Records"
    ) {
      thingToShow = (
        <div>
          {/* <h1>{firebase.auth().currentUser.displayName}</h1> */}
          <h3>You have host priveleges</h3>
        </div>
      )
    } else if ('other case!!') { 
      thingToShow = (
        <div>
          <h1>my other stuf!!</h1>
        </div>
      )
    }
    

    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
            <img 
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            {/* {firebase.auth().currentUser.displayName==="Dan Staggs" ? (
            <h3>You have host-level access</h3>)} */}
            
              
          </span>
        ) : ( 
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />

          
        )}
        {thingToShow}
        
      </div>
    )
  }
}

export default LoginPage;