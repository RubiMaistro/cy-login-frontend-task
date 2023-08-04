import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import '../css/Greeting.css'

function Greeting () {
  const {user, clearUser} = useAuth();

  return (
    <div className='Greeting-Container'>
      <img className='acme-logo' alt="acme-logo" />
      <h1 className='Greeting-Title'>
        Do you already have an account?
      </h1>
      <p className='Greeting-Text'>
        That's awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.
      </p>
      <button className='Greeting-Login-Btn' onClick={clearUser}>
        <Link to="/login" className='Login-Link'>Log in</Link>
      </button>
    </div>
  );
};

export default Greeting;
