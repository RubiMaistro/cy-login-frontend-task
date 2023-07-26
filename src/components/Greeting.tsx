import React from 'react';
import { Link } from 'react-router-dom';
import acmeLogo from '../resources/acme.png';

function Greeting () {
  return (
    <div>
      <img src={acmeLogo} alt="acme-logo" />
      <h1>
        Do you already have an account?
      </h1>
      <p>
        That's awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.
      </p>
      <button>
        <Link to="/login">Log In</Link>
      </button>
    </div>
  );
};

export default Greeting;
