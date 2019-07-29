import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: lightgrey;
  width: 20%;
`;

function EventCard({event}){
  return(
    <CardContainer>
      <p>Hello, I'm a Card for {event}</p>
    </CardContainer>
  )
}

export default EventCard;