import React from 'react';
import { useSelector } from 'react-redux';
import { HeroSelect, Hero, StatsProps } from '../../store/ducks/hero/types';

import { Container } from './styles';

const HeroStats = (props: StatsProps) => {
  
  // const hero = useSelector((state: HeroSelect) => state.reducerHero.hero)

  const hero = props.stats

  return (
    <Container>
      <h1>HeroStats</h1>
          <p>{hero.combat}</p>
          <p>{hero.durability}</p>
          <p>{hero.intelligence}</p>
          <p>{hero.power}</p>
          <p>{hero.speed}</p>
          <p>{hero.strength}</p>
    </Container>
  );
};

export default HeroStats;
