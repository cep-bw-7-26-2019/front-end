import React, { useEffect, useState} from 'react'
import EventCard from './EventCard.js'
import Axios from 'axios'

function EventList(){
  const [eventList, setEventList] = useState([]);

  //useEffect(() => {
    // const getEventList = () => {
    //   Axios
    //     .get('')
    //     .then(response => {
    //       setEventList(response)
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // }

    //getEventList();
  //}, []) /* will need to update as DB changes */

  setEventList(['event1', 'event2'])
  return( 
  <section className='event-list grid-view'>

    {eventList.map(event => (
      <EventCard key = {event.id} event = {event}/>
    ))}
    </section>
    
    )
}

export default EventList;