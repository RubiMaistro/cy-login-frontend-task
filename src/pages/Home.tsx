import React from 'react';
import Greeting from '../components/Greeting';

const Home = () : JSX.Element => {
  return (
    <div className={'d-flex flex-column'}>
      <Greeting />
    </div>
  );
};

export default Home;