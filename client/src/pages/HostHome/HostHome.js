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
            <h1>
              Host Homepage
            </h1>
            <Link to='/EventForm'>Event Form</Link>
            <CalendarComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HostHome;