import React from 'react'
import useAuth from '../hooks/useAuth';

export default function (postHandler) {
  return function (props) {
    const [state, handleChange, auth] = useAuth(props);
    return (
      <div>
        <h1>{props.title}</h1>
        <form onSubmit={auth[postHandler]} >
          Username:
        <input type="text" name="username" value={state.username} onChange={handleChange}></input>
          <br></br>
          Email:
        <input type="text" name="email" value={state.email} onChange={handleChange}></input>
          <br></br>
          Password:
        <input type="password" name="password" value={state.password} onChange={handleChange}></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

