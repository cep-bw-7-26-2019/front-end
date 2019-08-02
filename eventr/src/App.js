import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './components/EventList.js'
import AddEvent from './components/AddEvent.js'
import AddEventButton from './components/AddEventButton';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import Registration from './components/Register';

function App() {
  return (
    <div className="App">
     <Registration />
   
 
      <Route path="/dashboard" component={EventList} />
      <Route path="/addEvent" component={AddEvent}/>
    </div>
  );
}

export default App;
