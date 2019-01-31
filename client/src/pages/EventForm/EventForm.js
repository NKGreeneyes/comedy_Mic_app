import React, { Component } from "react";
import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/header.js";



class EventForm extends Component {
  state = {
    host : "Some Name!",
    hostcontact: "",
    mic: "anything",
    date: "",
    location: "",
    address: "",
    website: "",
    listorrandom: "", 
    signup: "",
    starttime: "",
    endtime: "",
    numberofspots: "",
    additionalinfo: "",
    


  };

  handleTyping = (e) => {
    
    this.setState({[e.target.name]: e.target.value})
  }
 

  handleSave = () => {
    console.log('OUR STATE IS!!', this.state);
    API.saveEvent(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Col size="md-12">
          {/* <Header text={'if we want it dynamic on comedian home we are set'}></Header> */}
            <h3>
             Host Open Mic Form
            </h3>

            <p>Host Name:</p><input name = "host" onChange={this.handleTyping}></input> 
            <p>Host Contact:</p> <input onChange={this.handleTyping}></input>
            <p>Mic Name: </p> <input name = "mic" onChange={this.handleTyping}></input> 
            <p>Date:</p><input onChange={this.handleTyping}></input> 
            <p>Location:</p><input onChange={this.handleTyping}></input> 
            <p>Address:</p> <input onChange={this.handleTyping}></input> 
            <p>Website:</p><input onChange={this.handleTyping}></input> 
            <p>List or Random Draw:</p><input onChange={this.handleTyping}></input> 
            <p>Sign Up Time:</p><input onChange={this.handleTyping}></input> 
            <p>Start Time:</p><input onChange={this.handleTyping}></input> 
            <p>End Time:</p><input onChange={this.handleTyping}></input> 
            <p>Number of Spots:</p><input onChange={this.handleTyping}></input> 
            <p>Additional Info:</p><input onChange={this.handleTyping}></input> 

            <p></p><input onChange={this.handleTyping}></input> 
            <button onClick={this.handleSave}>Save</button>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventForm;
