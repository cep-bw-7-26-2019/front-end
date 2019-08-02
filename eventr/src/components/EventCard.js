import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color:  #E9ECF0;
  width: 20%;
  box-shadow: 10px 10px 28px -8px rgba(101,103,153,1);
  margin: auto;
  margin-top: 100px;
`;

const Bullet = styled.p`
  margin: 0 auto;
  padding: 0;
`;

const InfoBox = styled.div`
  padding-bottom: 10px;
`;

const EventName = styled.h2`
  padding-top: 10px;
`;

function EventCard({ event }) {
  
  return (
    <CardContainer>
      <EventName>{event.name}</EventName>
      <InfoBox>
        <Bullet>Department: {event.description}</Bullet>
        <Bullet>Location: {event.location}</Bullet>
        <Bullet>Date: {event.date.substring(0,10)} at {event.time}</Bullet>
      </InfoBox>
    </CardContainer>
  )
}

export default EventCard;