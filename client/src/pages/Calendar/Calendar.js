import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
// import Header from "../../components/header.js";

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
            <h3>
              We could put the calendar right here
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendar;
