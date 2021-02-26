import React from 'react';
import HeroAppearence from '../../components/HeroAppearence';
import HeroContainer from '../../components/HeroContainer';
import HeroSearch from '../../components/HeroSearch';
import HeroStats from '../../components/HeroStats';

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
