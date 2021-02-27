import React from 'react';
import { AppearenceProps } from '../../store/ducks/hero/types';

import { Container } from './styles';

const HeroAppearence = (props: AppearenceProps) => {

  return (
    <Container>
      <h4>{props.name}</h4>
      <img src={props.image} alt={props.name}/>
    </Container>
  );
};

export default HeroAppearence;
