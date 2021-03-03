import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio, FormLabel, Button } from '@material-ui/core';
import './App.css';
import Form from './components/Form';

function App() {
  const { register, handleSubmit, errors} = useForm()

  // const onSubmit = (params: any) => {
  //   console.log(params)
  // }

  return (
    <div className="App">
      <Form />
      {/* <form action="" onChange={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-nomeText"
          label="Nome"
          helperText="Campo obrigatório*"
          variant="outlined"
          name="nome"
          inputRef={register}
        />
        <TextField
          id="outlined-cidadeText"
          label="Cidade"
          helperText="Campo obrigatório*"
          variant="outlined"
          name="cidade"
          inputRef={register}
        />
        <TextField
          id="outlined-emailText"
          label="E-mail"
          helperText="Campo obrigatório*"
          variant="outlined"
          name="email"
          inputRef={register}
        />
        <TextField
          id="outlined-idadeText"
          label="idade"
          helperText="Campo obrigatório*"
          variant="outlined"
          name="idade"
          inputRef={register}
        />
          <FormLabel component="legend">Estado Civil</FormLabel>
          <RadioGroup aria-label="gender" name="estado-civil">
            <FormControlLabel value="Solteire" control={<Radio />} label="Solteire" />
            <FormControlLabel value="Casade" control={<Radio />} label="Casade" />
            <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
          </RadioGroup>
        <Button variant="contained" color="secondary" type="submit">
          Submeter
        </Button>
      </form> */}
    </div>
  );
}

export default App;
