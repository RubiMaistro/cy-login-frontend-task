import React from 'react';
import Greeting from '../components/Greeting';
import { useAuth } from '../hooks/useAuth';

const Home = () : JSX.Element => {
  const {user} = useAuth();
  return (
    <div className={'d-flex flex-column'}>
      <Greeting />
      <pre>{JSON.stringify({user}, null, 2)}</pre>
    </div>
  );
};

export default Home;