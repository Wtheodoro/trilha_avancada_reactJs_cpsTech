import React from 'react';

import { Container } from './styles';
import { Helmet } from  'react-helmet'

const Home: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="home" content="home page" />
    </Helmet>
    <Container>
      <div className="who-m-i">
        <h1>Hi, I'm Walison, web developer.</h1>
        <h2>Front end Developer</h2>
      </div>
      <div className="gif">
        <img src="https://media.giphy.com/media/24652QfeZzNIPzoH36/giphy.gif" alt="coding rocks"/>
      </div>
      
    </Container>
    </>
  );
};

export default Home;
