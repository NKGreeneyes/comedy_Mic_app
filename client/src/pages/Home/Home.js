import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/header.js";
import Axios from 'axios'

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
    console.log('this is our state!!!!', this.state);
    return (
      <Container>
        <Row>
          <Col size="md-12">
          <Header text={'hey gang this header works'}></Header>

          <h1>hey this would be the home page</h1>
            <h3>
              Hello there! You absolutely don't have to, put if you'd like use
              the grid components to help layout your pages, feel free!
            </h3>

    <h1> tom test</h1>
    <h3>(quick reminder from dan that tom test is just a way to take data from the user, it's not the actual email and password fields)</h3>
    
      <p>Email</p>
      <input onChange={this.handleUserName}></input>
      <p>Pass</p>
      <input onChange={this.handlePass}></input>
      <button onClick={this.handleSave}>Save!!</button>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
