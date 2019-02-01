import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
import CalendarComponent from '../../components/componentCalendar'
import EventForm from "../EventForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Header from "../../components/header.js";

class HostHome extends Component {
  state = {
    example: "some state!"
  };

  render() {
    
    return (
      <Container>
        <Row>
          <Col size="md-12">
          {/* <Header text={'dynamic header on the HostHome page'}></Header> */}
            <h3 style={{textAlign:'center', color:'purple'}}>
              Host Homepage
            </h3>
            <Link to='/EventForm'>Event Form</Link>
            <div class='animated slideInUp' style={{border:'5px solid purple', borderRadius:'5px'}}>
            <CalendarComponent />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HostHome;