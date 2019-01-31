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
      'start':  (new Date(2019, 0, 0)),
      'end':  (new Date(2019, 0, 0)),
      'reoccurring': true,

    },
    {
      'title': 'The Riff',
      'start':  (new Date(2019, 0, 0)),
      'end':  (new Date(2019, 0, 0)),
      'reoccurring': true,
    },

    {
        'title': 'Comedy Overload',
        'start':  (new Date(2019, 0, 0)),
         'end':  (new Date(2019, 0, 0)),
         'reoccurring': true,
     },
     {
        'title': 'Smart Mouth',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
         'reoccurring': true,
    },
    {
        'title': 'Schubas',
        'start':  (new Date(2019, 0, 0)),
         'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Logan Lounge',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Five Star Comedy',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'iO Open Mic',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Laughs in Lakeview',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Bump City',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Navigator Taproom',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Elizabeths Crazy Little Thing',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Trigger Warning',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Dont Quit your Day Job',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'The Late Night Mic',
        'start':  (new Date(2019, 0, 0)),
        'end':  (new Date(2019, 0, 0)),
        'reoccurring': true,
    },
    {
        'title': 'Early Bird',
        'start':  (new Date(2019, 0, 1)),
        'end':  (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'The Den Theatre Open Mic',
        'start':  (new Date(2019, 0, 1)),
         'end': (new Date(2019, 0, 1)),
         'reoccurring': true,
    },
    {
        'title': 'Toms Tap',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Def Leprechaun',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Pressure Open Mic',
        'start':  (new Date(2019, 0, 1)),
         'end': (new Date(2019, 0, 1)),
         'reoccurring': true,
    },
    {
        'title': 'Pint O laughs',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Tap Queen',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Patsys',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Taco Takeover',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Sip Sip Hooray',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Lotties',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'The Open Mic',
        'start':  (new Date(2019, 0, 1)),
        'end': (new Date(2019, 0, 1)),
        'reoccurring': true,
    },
    {
        'title': 'Coles',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Irish Eyes',
        'start':  (new Date(2019, 0, 2)),
        'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'You Joke Like a Girl - All Womens Open Mic',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Chris Trani Comedy Practice!',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Marys Comedy Club',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Cosmic Comedy',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Am I Right?',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Swig open night',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Easy Breezy',
        'start':  (new Date(2019, 0, 2)),
         'end': (new Date(2019, 0, 2)),
         'reoccurring': true,
    },
    {
        'title': 'Rewired Comedy',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Codys',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Live from Moms Basement',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Blue Line Laughs',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Mic It or Not',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Comedy Bar Open Mic',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'American Dream Mic',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Diminishing Returns',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Beer Belly Open Mic',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'BStage Open Mic',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Jokenest Comedy mic',
        'start':  (new Date(2019, 0, 3)),
        'end': (new Date(2019, 0, 3)),
        'reoccurring': true,
    },
    {
        'title': 'Replay Arcade',
        'start':  (new Date(2019, 0, 4)),
        'end': (new Date(2019, 0, 4)),
        'reoccurring': true,
    },
    {
        'title': 'Power Hour',
        'start':  (new Date(2019, 0, 4)),
        'end': (new Date(2019, 0, 4)),
        'reoccurring': true,
    },
    {
        'title': 'Feedback Feedbag',
        'start':  (new Date(2019, 0, 4)),
        'end': (new Date(2019, 0, 4)),
        'reoccurring': true,
    },
    {
        'title': 'BStage Open Mic',
        'start':  (new Date(2019, 0, 4)),
        'end': (new Date(2019, 0, 4)),
        'reoccurring': true,
    },
    {
        'title': 'Late Late Breakfast',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Voodoo Open Mic',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Smol Bean',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Second City Training Center',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Bills Bar & Burger Mic',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Annoyance',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'The Barrel',
        'start':  (new Date(2019, 0, 5)),
        'end': (new Date(2019, 0, 5)),
        'reoccurring': true,
    },
    {
        'title': 'Living Room Sessions',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'Three Dead Moose',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'The Comedy Oasis',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'Rising Stars Mic',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'Greenlight Open Mic',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'Fun simulation ',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    {
        'title': 'DMen Tap Open Mic',
        'start':  (new Date(2019, 0, 6)),
        'end': (new Date(2019, 0, 6)),
        'reoccurring': true,
    },
    



    // {
    //   'title': 'DTS STARTS',
    //   'start': new Date(2019, 2, 13, 0, 0, 0),
    //   'end': new Date(2019, 2, 20, 0, 0, 0)
    // },

    // {
    //   'title': 'DTS ENDS',
    //   'start': new Date(2019, 10, 6, 0, 0, 0),
    //   'end': new Date(2019, 10, 13, 0, 0, 0)
    // }
]
const newArray = [...myEventsList]
 myEventsList.forEach (event => {
     if (event.reoccurring) {
         let week = 1
         while (week < 53){

             const start = moment(event.start).add(week, "weeks")
             const end = moment(event.end).add(week, "weeks")
             newArray.push({
                 title: event.title,
                 start, 
                 end,
    
             })
             week++
         }
     }
     
    })
    console.log(newArray);
    
 
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
            events={newArray}
            startAccessor="start"
            endAccessor="end"
        />
        </div>
    )
}

    export default CalendarComponent;
