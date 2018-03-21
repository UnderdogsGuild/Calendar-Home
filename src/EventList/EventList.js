import React, { Component } from 'react';
import './EventList.css'
import EventItem from "./EventItem";

class EventList extends Component {
    render() {
        const eventItems = this.props.events.map(event => {
            return <EventItem event={event}/>
        });
        return (
            <div className="EventList">
                {eventItems}
            </div>
        );
    }
}

export default EventList;