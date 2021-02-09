import React from 'react';

import { Container } from './styles';
import gif from '../../gif/3dCardParallax.gif'

const Work = () => {
  return (
    <Container>
      <div className="text">
        <h2>My work</h2>
        <p>I have'nt done mutch yet. But take a look on this!</p>
      </div>
      <div className="gif">
        <img src={gif} alt=""/>
      </div>
    </Container>
  );
};

export default Work;
