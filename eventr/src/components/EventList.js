import React, { useEffect, useState} from 'react'
import EventCard from './EventCard.js'
import Axios from 'axios'

function EventList(){

  const [eventList, setEventList] = useState([]);

//   useEffect(() => {
//      const getEventList = () => {
//        Axios
//          .get('https://lseventr.herokuapp.com/api/events')
//          .then(response => {
//            console.log(response);
//            setEventList(response.data)
//          })
//          .catch(error => {
//            console.error(error)
//          })
//      }

//     getEventList();
// }, []) 


  return( 
  <section className='event-list grid-view'>

    {/* {eventList.map((event, index) => (
      <EventCard key = {index} event = {event}/>
    ))} */}
    </section>
    
    )
}

export default EventList;