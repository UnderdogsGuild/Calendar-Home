import React, { Component } from 'react';
import './EventItem.css'

class EventItem extends Component {
    render() {
        let watermark = null;
        if(typeof this.props.event.watermark !== 'undefined') {
            watermark = (
                <div className="Watermark">
                    <img src={this.props.event.watermark + 'Watermark.png'} alt=""/>
                </div>
            );
        }

        return (
            <div className="EventItem" eid={this.props.event.id}>
                <div className="EventDate">
                    <div className="EventDateNumber">{this.props.event.date.day}</div>
                    <div className="EventDateMonth">{this.props.event.date.month}</div>
                </div>
                <div className="EventName">
                    {this.props.event.name}
                </div>
                {watermark}
            </div>
        );
    }
}

export default EventItem;