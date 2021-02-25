import React from 'react';
import HeroAppearence from '../../components/HeroAppearence';
import HeroSearch from '../../components/HeroSearch';
import HeroStats from '../../components/HeroStats';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <HeroSearch />
      <div>
        <HeroAppearence/>
        <HeroStats />
      </div>
    </Container>
  );
};

export default Home;
