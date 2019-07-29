import React, { useEffect, useState} from 'react'
import EventCard from './EventCard.js'
import Axios from 'axios'

function EventList(){
  const [eventList, setEventList] = useState(["1", "2"]);

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


  return( 
  <section className='event-list grid-view'>

    {eventList.map((event, index) => (
      <EventCard key = {index} event = {event}/>
    ))}
    </section>
    
    )
}

export default EventList;