import React, { Component } from 'react';
import './App.css';
import EventList from "../EventList/EventList";
import events from "../events";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Upcoming Events</h1>
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
