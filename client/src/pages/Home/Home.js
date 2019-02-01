import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
// import Header from "../../components/header.js";
import Axios from 'axios';
import SignIn from '../../pages/Home/SignIn.js';
import CalendarComponent from '../../components/componentCalendar'

class Home extends Component {
  state = {
    email: "",
    pass: ''
  };

  handleUserName = (e) => {
    this.setState({email: e.target.value})

  }
  
  handlePass = (e) => {
    this.setState({pass: e.target.value})
  }

  handleSave = () => {
    console.log('this is what we are about to save!!!', this.state);
    Axios.post('http://localhost:3001/save',this.state ).then(function(data){
      console.log('we got this back', data)
    })
  }
  render() {
    //console.log('this is our state!!!!', this.state);
    return (
      <Container>
        <Row>
          <Col size="md-12">
  
          <CalendarComponent />

          <SignIn />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
