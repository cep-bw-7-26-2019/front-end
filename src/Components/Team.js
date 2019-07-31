import React, { useState } from "react";
import { tsPropertySignature } from "@babel/types";

function Events(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    event: props.event.event,
    date: props.event.date,
    location: props.event.location,
    description: props.event.description,
    id: props.event.id
  });
  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    setIsEditing(!isEditing);
  };

  const updateHandler = e => {
    e.preventDefault();
    props.updateEvent(input);
    setIsEditing(!isEditing);
  };

  console.log("inputs", input);
  console.log("edit", isEditing);
  if (isEditing) {
    return (
      <div>
        <h1>Edit Event</h1>
        <form onSubmit={updateHandler}>
          <div>
            <label htmlFor="event">
             Event: {" "}
              <input
                type="text"
                value={input.event}
                name="event"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="date">
              Date:{" "}
              <input
                type="text"
                value={input.date}
                name="date"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="location">
              Location:{" "}
              <input
                type="text"
                value={input.location}
                name="location"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="description">
              Description:{" "}
              <input
                type="text"
                value={input.description}
                name="description"
                onChange={handleInput}
              />
            </label>
          </div>

          <button>Update Event</button>
        </form>
        <button onClick={handleEdit}>go back</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Event:</h2>
      <p>{props.event.event}</p>
      <h2>Date:</h2>
      <p>{props.event.date}</p>
      <h2>Location:</h2>
      <p>{props.event.location}</p>
      <h2>Description:</h2>
      <p>{props.event.description}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Events;