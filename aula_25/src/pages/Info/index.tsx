import React from 'react';
import { Helmet } from 'react-helmet';
import Skills from '../../components/Skills';

import { Container } from './styles';

const Info = () => {
  return (
    <>
    <Helmet>
      <title>About me</title>
      <meta name="aboutMe" content="About me" />
    </Helmet>
    <Container>
      <div className="about-me">
        <h1>About me</h1>
        <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        <p>I'm alsol a civil engenier, so if you want to build a house, i'm the guy '-', just kidding.</p>
      </div>
      <div className="bottom">
        <Skills />
      </div>
    </Container>
    </>
  );
};

export default Info;
