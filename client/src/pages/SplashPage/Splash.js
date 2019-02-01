import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import style from "../../style.css"
import CalendarComponent from "../../components/componentCalendar";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { weekdays } from "moment";



const localizer = BigCalendar.momentLocalizer(moment) 

const events = [
  {
    'title': 'Shaken, Not Stirred',
    'title': 'All Day Event',
    'allDay': true,
    'start':  (new Date(2019, 1, 1)),
    'end':  (new Date(2019, 1, 2)),
    'reoccurring': true,

  },
  {
    'title': 'The Riff',
    'start':  (new Date(2019, 1, 11)),
    'end':  (new Date(2019, 1, 12)),
    'reoccurring': true,
  },

  {
      'title': 'Comedy Overload',
      'start':  (new Date(2019, 1, 15)),
       'end':  (new Date(2019, 1, 16)),
       'reoccurring': true,
   },
   {
      'title': 'Smart Mouth',
      'start':  (new Date(2019, 1, 20)),
      'end':  (new Date(2019, 1, 21)),
       'reoccurring': true,

  }
]
const Splash = () => (
<div style={{height: '500px'}} >
        <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
        />
        </div>
);

export default Splash;
