import React from 'react';
import { Button, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, Radio, RadioGroup } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { Container } from './styles';

const Form: React.FC = () => {
  const { register, handleSubmit, errors} = useForm()
  const submit = (data: any) => {
    console.log(data)
  }
  return (
    <Container>
      <h1>Incrição p/ doação de medula óssea</h1>
      <form onSubmit={handleSubmit(submit)}>
      <FormControl>
        <InputLabel htmlFor='nome'>Nome</InputLabel>
        <Input id="name" type="text" aria-describedby="name-helper" name="nome" inputRef={register({ required: true})}/>
        <FormHelperText id="name-helper">Nome completo</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='city'>Cidade</InputLabel>
        <Input id="city" type="text" name="cidade" inputRef={register}/>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='email'>E-mail</InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" name="email" inputRef={register({ required: true })}/>
        <FormHelperText id="email-helper">Seu endereço eletrônico pessoal</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='email'>Idade</InputLabel>
        <Input id="idade" type="number" aria-describedby="idade-helper" name="idade" inputRef={register({ required: true, min: 18})} />
        {
          errors.idade && <span className="error">Apenas para maiores de 18 anos</span>
          // <FormHelperText id="idade-helper" error >Serviço disponível apenas para maioritários</FormHelperText>
        }
      </FormControl>

      <RadioGroup aria-label="estadoCivil" name="estadoCivil">
        <FormControlLabel value="solteire" control={<Radio />} label="Solteire" inputRef={register({ required: true })}/>
        <FormControlLabel value="casade" control={<Radio />} label="Casade" inputRef={register({ required: true  })}/>
        <FormControlLabel value="divorciade" control={<Radio />} label="Divorciade" inputRef={register({ required: true })}/>
        <FormControlLabel value="viuve" control={<Radio />} label="viúve" />
      </RadioGroup>
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
      </form>
    </Container>
  );
};

export default Form;
