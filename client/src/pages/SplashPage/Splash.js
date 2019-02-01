import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import style from "../../style.css"
import CalendarComponent from "../../components/componentCalendar";

const Splash = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        
        <h1 className="text-center" className="text-center">
          upcoming events
        </h1>
        <div> 
            {/* hard code in some events from the sibling components/componentcalendar to this section*/}
        </div>
        
      </Col>
    </Row>
  </Container>
);

export default Splash;
