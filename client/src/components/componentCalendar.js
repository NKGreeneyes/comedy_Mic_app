import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import API from '../utils/API.js';


const localizer = BigCalendar.momentLocalizer(moment) 

const myEventsList=[

    {
      'title': 'All Day Event',
      'allDay': true,
      'start': new Date(2019, 3, 0),
      'end': new Date(2019, 3, 1)
    },
    {
      'title': 'Long Event',
      'start': new Date(2019, 3, 7),
      'end': new Date(2019, 3, 10)
    },

    {
      'title': 'DTS STARTS',
      'start': new Date(2019, 2, 13, 0, 0, 0),
      'end': new Date(2019, 2, 20, 0, 0, 0)
    },

    {
      'title': 'DTS ENDS',
      'start': new Date(2019, 10, 6, 0, 0, 0),
      'end': new Date(2019, 10, 13, 0, 0, 0)
    }
]
 
class CalendarComponent extends React.Component {


//const CalendarComponent = (props) => {

    componentWillMount() {
        console.log('api', API)
        API.grabEvents(function(data){
            console.log('this is our event!!', data)
        })
    }

    render() {
        return (
            <div style={{height: '500px'}} >
            <BigCalendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
            </div>
        )
    }
    
}

    export default CalendarComponent;
