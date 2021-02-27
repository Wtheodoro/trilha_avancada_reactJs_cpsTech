import React from 'react';
import { useSelector } from 'react-redux';
import { Hero, HeroSelect } from '../../store/ducks/hero/types';
import HeroAppearence from '../HeroAppearence';
import HeroStats from '../HeroStats';

import { Container } from './styles';

const HeroContainer = () => {

  const hero = useSelector((state: HeroSelect) => state.reducerHero.hero)

  return (
    <Container>
      {
        hero?.map((i: Hero) => (
          <div key={i.id}>
          <HeroAppearence name={i.name} image={i.image.url}/>
          <HeroStats stats={i.powerstats}/>
          </div>
        ))
      }
      
    </Container>
  );
};

export default HeroContainer;
