import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";
// import Header from "../../components/header.js";
import CalendarComponent from '../../components/componentCalendar'


class ComedianHome extends Component {
  state = {
    example: "some state!"
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
          {/* <Header text={'if we want it dynamic on comedian home we are set'}></Header> */}
            <h3 style={{textAlign:'center', color:'purple'}}>
              Comedian Homepage
            </h3>
            <div class='animated slideInUp' style={{border:'5px solid purple', borderRadius:'5px'}}>
            <CalendarComponent />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ComedianHome;
