import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import API from '../utils/API.js';


const localizer = BigCalendar.momentLocalizer(moment) 

const myEventsList=[


]
 
class CalendarComponent extends React.Component {

    state = {
        events: []
    }

    


//const CalendarComponent = (props) => {

    componentWillMount() {
        var self = this
        console.log('api', API)
        API.grabEvents(function(data){
            console.log('this is our event!!', data)

            var cleanEvents = []

            for(var i=0; i <data.data.length; i ++) {
                var newEvent = {
                    'title': data.data[i].mic,
                    'start': data.data[i].starttime,
                    'end': data.data[i].endtime
                }

                cleanEvents.push(newEvent);

            }

            console.log('clean events!!!', cleanEvents)
            self.setState({events: cleanEvents});
        })
    }

    render() {
        console.log('this is our state!!', this.state);
        return (
            <div style={{height: '500px'}} >
            <BigCalendar
                localizer={localizer}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
            />
            </div>
        )
    }
    
}

    export default CalendarComponent;
