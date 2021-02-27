import React from 'react';
import HeroContainer from '../../components/HeroContainer';
import HeroSearch from '../../components/HeroSearch';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <HeroSearch />
      <HeroContainer />
    </Container>
  );
};

export default Home;
