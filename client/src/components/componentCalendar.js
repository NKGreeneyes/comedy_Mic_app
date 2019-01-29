import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


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
 
const CalendarComponent = (props) => {

    // var date = new Date()
    // var event = [
    //     {
    //         title: 'event 1',
    //         start: date,
    //         end: Date,
    //         allDay: false
    //     },
    //     {
    //         title: 'event 2',
    //         start: date,
    //         end: Date,
    //         allDay: false
    //     }
    // ]
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

    export default CalendarComponent;
