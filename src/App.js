import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from "./Components/Form";
import Events from "./Components/Team";

function App() {
  const [events, setEvents] = useState([]);
  const addEvent = event => setEvents([...events, event]);

  const updateEvent = uEvent =>
    setEvents([
      ...events.map(event => {
        if (event.id === uEvent.id) {
          return uEvent;
        }
        return event;
      })
    ]);

  console.log("events", events);
  return (
    <div className="App">
      <div className="Top">
      <h1>Eventr</h1>
      <div className="Navbar">
        <a href="#">Home</a>
      </div>
      </div>
      <div className="Event-Container">
        {events.map(event => (
          <Events event={event} updateEvent={updateEvent} />
        ))}
        <Form addEvent={addEvent} />
      </div>
      <div className="Footer">
        <h4>Eventr</h4>
      </div>
    </div>
  );
}

export default App;
