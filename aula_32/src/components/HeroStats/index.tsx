import React from 'react';
import { StatsProps } from '../../store/ducks/hero/types';

import { Container } from './styles';

const HeroStats = (props: StatsProps) => {
  
  const hero = props.stats

  return (
    <Container>
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
