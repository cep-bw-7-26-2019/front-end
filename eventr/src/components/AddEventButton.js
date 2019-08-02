import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OuterBox = styled.div`
  width: 10%;
  height: 5%;
  border: 2px solid black;
  background-color: teal;
`;

function AddEventButton(){
  return(
    <OuterBox>
      <Link to ="/addEvent">+ Add New Event</Link>
    </OuterBox>
  )
}

export default AddEventButton;