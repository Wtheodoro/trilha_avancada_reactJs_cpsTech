import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { loadHeroRequest } from '../../store/ducks/hero/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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
      <TextField id="outlined-basic" label="Super-Hero or Super-Villain" variant="outlined" inputRef={hero}/>
      <Button color="primary" onClick={findHero}>Search</Button>
    </Container>
  );
};

export default HeroSearch;
