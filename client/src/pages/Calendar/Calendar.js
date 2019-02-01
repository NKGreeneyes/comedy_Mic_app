import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
// import Header from "../../components/header.js";
import CalendarComponent from '../../components/componentCalendar'

class Calendar extends Component {
  state = {
    example: "some state!"
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
          {/* <Header text={'change the header for the calendar page'}></Header> */}
          <CalendarComponent />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendar;
