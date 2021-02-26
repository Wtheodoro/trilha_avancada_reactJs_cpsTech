import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppearenceProps } from '../../store/ducks/hero/types';

import { Container } from './styles';

const HeroAppearence = (props: AppearenceProps) => {

  return (
    <Container>
      <h1>HeroAppearence</h1>
          <h4>{props.name}</h4>
          <img src={props.image} alt={props.name}/>
    </Container>
  );
};

export default HeroAppearence;
