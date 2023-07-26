import React from 'react';
import { Link } from 'react-router-dom';

export default function Login () {
  return (
    <div>
      <h1>Login Form</h1>
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};
