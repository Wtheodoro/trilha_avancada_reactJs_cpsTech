import React from 'react';

import { Container } from './styles';
import gif from '../../gif/3dCardParallax.gif'
import { Helmet } from 'react-helmet';

const Work = () => {
  return (
    <>
    <Helmet>
      <title>My Work</title>
      <meta name="home" content="home page" />
    </Helmet>
    <Container>
      <div className="text">
        <h2>My work</h2>
        <p>I have'nt done mutch yet. But take a look on this!</p>
      </div>
      <div className="gif">
        <img src={gif} alt=""/>
      </div>
    </Container>
    </>
  );
};

export default Work;
