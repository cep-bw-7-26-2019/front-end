import React, {useState} from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage.js';

export default function(props){
  const defaultState = {
    username: '',
    password: '',
    email: ''
  }

  const [state, setState] = useState(defaultState);
  
  function handleChange(event){
    setState({...state, [event.target.name]: event.target.value})
  }

  function handleRegistration(event){
    event.preventDefault();
    axios
      .post('https://lseventr.herokuapp.com/api/auth/register', {
        username: state.username,
        password: state.password,
        email: state.email
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      })
      setState(defaultState);
      //props.history.push('/login')
  }

  function handleLogin(event){
    event.preventDefault();
    axios
      .post('https://lseventr.herokuapp.com/api/auth/login', {
        username: state.username,
        password: state.password
      })
      .then(response => {
        /*
        set Token to localStorage
        conditional
        */
        console.log(response)
        props.history.push('/dashboard')
      })
      .catch(error => {
        console.error(error);
      })
      setState(defaultState);
  }

  return ( [state, handleChange, {handleLogin, handleRegistration}] )
}