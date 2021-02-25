import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { loadHeroRequest } from '../../store/ducks/hero/actions';
import { getHeroSaga } from '../../store/ducks/hero/saga';

import { Container } from './styles';

const HeroSearch = () => {

  const hero = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  
  const findHero = () => {
     dispatch(loadHeroRequest(hero?.current?.value))
  }

  return (
    <Container>
      <h1>My Super!</h1>
      <input type="text" ref={hero}/>
      <button onClick={findHero}>Search</button>
    </Container>
  );
};

export default HeroSearch;
