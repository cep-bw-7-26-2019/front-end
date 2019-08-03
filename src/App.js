import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from "./Components/Form";
import Events from "./Components/Team"; 
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  function addEvent(event) {
    setEvents([...events, event]);
    axios.post("https://lseventr.herokuapp.com/api/events", event)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const deleteEvent = id => {
    setEvents(events.filter(event => event.id !== id))
    axios.delete("https://lseventr.herokuapp.com/api/events/:id", id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  function updateEvent(uEvent) {
    setEvents([
      ...events.map(event => {
        if (event.id === uEvent.id) {
          return uEvent;
        }
        return event;
      })
    ])
    axios.put("https://lseventr.herokuapp.com/api/events/:id", uEvent)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  console.log("events", events);
  return (
    <div className="App">
      <div className="Top">
        <h1>Eventr</h1>
        <div className="Navbar">
          <a href="https://competent-pike-e3b0f7.netlify.com/index.html">Home</a>
          <a href="https://competent-pike-e3b0f7.netlify.com/about.html">About</a>
          <a href="https://eventr.netlify.com/">My Events</a>
          <a href="#">Log Out</a>
        </div>
      </div>
      <div className="Event-Container">
        {events.map(event => (
          <Events event={event} updateEvent={updateEvent} deleteEvent={deleteEvent} />
        ))}
        <Form addEvent={addEvent}/>
      </div>
      <div className="Footer">
        <h4>Eventr 2019</h4>
      </div>
</div>
  )
}

export default App;
