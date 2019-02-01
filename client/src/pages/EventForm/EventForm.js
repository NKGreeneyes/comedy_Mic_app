import React, { Component } from "react";
import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/header.js";



class EventForm extends Component {
  state = {
    host : "Some Name!",
    hostcontact: "Some Contact Info!",
    mic: "Some Mic Name!",
    date:  new Date(2019, 3, 0),
    location: "Some Bar probably!",
    address: "Some Address!",
    website: "Some Website!",
    listorrandom: "Some List!", 
    signup: "Some Sign up!",
    starttime:  new Date(2019, 3, 0),
    endtime:  new Date(2019, 3, 1),
    numOfSpots: 'test',
    addInfo: 'test'
  };

  handleTyping = (e) => {
    
    this.setState({[e.target.name]: e.target.value})
  }
 

  handleSave = () => {
    var thingToSave = this.state
    thingToSave.starttime = thingToSave.starttime + 'T05:00:00.000Z'
    thingToSave.endtime = thingToSave.endtime + 'T05:00:00.000Z'
    
    console.log('OUR thingToSave!!', thingToSave);
    
    API.saveEvent(thingToSave)
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
            <p>Host Contact:</p> <input name = "hostcontact" onChange={this.handleTyping}></input>
            <p>Mic Name: </p> <input name = "mic" onChange={this.handleTyping}></input> 
            <p>Date:</p><input name = "date" onChange={this.handleTyping}></input> 
            <p>Location:</p><input name = "location" onChange={this.handleTyping}></input> 
            <p>Address:</p> <input name = "address" onChange={this.handleTyping}></input> 
            <p>Website:</p><input name = "website" onChange={this.handleTyping}></input> 
            <p>List or Random Draw:</p><input  name = "listorrandom" onChange={this.handleTyping}></input> 
            <p>Sign Up Time:</p><input name = "signup" onChange={this.handleTyping}></input> 
            <p>Start Time:</p><input name = "starttime" onChange={this.handleTyping}></input> 
            <p>End Time:</p><input name = "endtime" onChange={this.handleTyping}></input> 
            <p>Number of Spots:</p><input name = "numOfSpots" onChange={this.handleTyping}></input> 
            <p>Additional Info:</p><input name = "addInfo" onChange={this.handleTyping}></input> 
            <button onClick={this.handleSave}>Save</button>
            
           {/* <p></p><input name = "" onChange={this.handleTyping}></input>  */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventForm;
