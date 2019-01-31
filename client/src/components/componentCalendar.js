import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { weekdays } from "moment";


const localizer = BigCalendar.momentLocalizer(moment) 

const myEventsList=[

    {
      'title': 'Shaken, Not Stirred',
      'allDay': true,
      'start': new Date(2019, 0, 0),
      'end': new Date(2019, 0, 0),
      'start': new Date(2019, 0, 7),
      'end': new Date(2019, 0, 7)
    },
    {
      'title': 'The Riff',
      'start': new Date(2019, 0, 0),
      'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Comedy Overload',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
     },
     {
        'title': 'Smart Mouth',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Schubas',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Logan Lounge',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Five Star Comedy',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'iO Open Mic',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Laughs in Lakeview',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Bump City',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Navigator Taproom',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Elizabeths Crazy Little Thing',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Trigger Warning',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Dont Quit your Day Job',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'The Late Night Mic',
        'start': new Date(2019, 0, 0),
        'end': new Date(2019, 0, 0)
    },
    {
        'title': 'Early Bird',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'The Den Theatre Open Mic',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Toms Tap',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Def Leprechaun',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Pressure Open Mic',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Pint O laughs',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Tap Queen',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Patsys',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Taco Takeover',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Sip Sip Hooray',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Lotties',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'The Open Mic',
        'start': new Date(2019, 0, 1),
        'end': new Date(2019, 0, 1)
    },
    {
        'title': 'Coles',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Irish Eyes',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'You Joke Like a Girl - All Womens Open Mic',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Chris Trani Comedy Practice!',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Marys Comedy Club',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Cosmic Comedy',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Am I Right?',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Swig open night',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Easy Breezy',
        'start': new Date(2019, 0, 2),
        'end': new Date(2019, 0, 2)
    },
    {
        'title': 'Rewired Comedy',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Codys',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Live from Moms Basement',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Blue Line Laughs',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Mic It or Not',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Comedy Bar Open Mic',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'American Dream Mic',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Diminishing Returns',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Beer Belly Open Mic',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'BStage Open Mic',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Jokenest Comedy mic',
        'start': new Date(2019, 0, 3),
        'end': new Date(2019, 0, 3)
    },
    {
        'title': 'Replay Arcade',
        'start': new Date(2019, 0, 4),
        'end': new Date(2019, 0, 4)
    },
    {
        'title': 'Power Hour',
        'start': new Date(2019, 0, 4),
        'end': new Date(2019, 0, 4)
    },
    {
        'title': 'Feedback Feedbag',
        'start': new Date(2019, 0, 4),
        'end': new Date(2019, 0, 4)
    },
    {
        'title': 'BStage Open Mic',
        'start': new Date(2019, 0, 4),
        'end': new Date(2019, 0, 4)
    },
    {
        'title': 'Late Late Breakfast',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Voodoo Open Mic',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Smol Bean',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Second City Training Center',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Bills Bar & Burger Mic',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Annoyance',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'The Barrel',
        'start': new Date(2019, 0, 5),
        'end': new Date(2019, 0, 5)
    },
    {
        'title': 'Living Room Sessions',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'Three Dead Moose',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'The Comedy Oasis',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'Rising Stars Mic',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'Greenlight Open Mic',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'Fun simulation ',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
    },
    {
        'title': 'DMen Tap Open Mic',
        'start': new Date(2019, 0, 6),
        'end': new Date(2019, 0, 6)
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
