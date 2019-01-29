import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/header.js";



class EventForm extends Component {
  state = {
    example: "some state!"
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
          <Header text={'if we want it dynamic on comedian home we are set'}></Header>
            <h3>
             event form page
            </h3>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventForm;
