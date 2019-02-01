import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import style from "../../style.css"


// import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import API from '../../utils/API.js';
import CalendarComponent from "../../components/componentCalendar"

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

// class Splash extends React.Component {
//     <div>   yo</div>
// }


export default Splash;
