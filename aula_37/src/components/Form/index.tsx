import React from 'react';
import { Button, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, Radio, RadioGroup } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { Container } from './styles';

const Form: React.FC = () => {

  const { register, handleSubmit, errors, watch} = useForm()

  const married = watch('estadoCivil')

  const submit = (data: any) => {
    console.log(data)
  } 

  return (
    <Container>
      <h1>Incrição p/ doação de medula óssea</h1>
      <form title="form" onSubmit={handleSubmit(submit)}>
      <FormControl>
        <InputLabel htmlFor='nome'>Nome</InputLabel>
        <Input title="nome" id="name" type="text" aria-describedby="name-helper" name="nome" inputRef={register({ required: true})}/>
        <FormHelperText id="name-helper">Nome completo</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='city'>Cidade</InputLabel>
        <Input title="cidade" id="city" type="text" name="cidade" inputRef={register}/>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='email'>E-mail</InputLabel>
        <Input title="email" id="email" type="email" aria-describedby="email-helper" name="email" inputRef={register({ required: true })}/>
        <FormHelperText id="email-helper">Seu endereço eletrônico pessoal</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='email'>Idade</InputLabel>
        <Input title="idade" id="idade" type="number" aria-describedby="idade-helper" name="idade" inputRef={register({ required: true, min: 18})} />
        {
          errors.idade && <span className="error">Apenas para maiores de 18 anos</span>
          // <FormHelperText id="idade-helper" error >Serviço disponível apenas para maioritários</FormHelperText>
        }
      </FormControl>

      <RadioGroup title="estadoCivil" aria-label="estadoCivil" name="estadoCivil">
        <FormControlLabel value="solteire" control={<Radio />} label="Solteire" inputRef={register({ required: true })}/>
        <FormControlLabel title="casade" value="casade" control={<Radio />} label="Casade" inputRef={register({ required: true  })}/>
        <FormControlLabel value="divorciade" control={<Radio />} label="Divorciade" inputRef={register({ required: true })}/>
        <FormControlLabel value="viuve" control={<Radio />} label="viúve" />
      </RadioGroup>
      
      {
        married === 'casade' &&
        <FormControl>
          <InputLabel htmlFor='nomeConjuge'>Nome de conjuge</InputLabel>
          <Input title="nomeConjuge" id="nameConjuge" type="text" aria-describedby="namec-helper" name="nomeConjuge" inputRef={register({ required: true})}/>
          <FormHelperText id="nameConjuge-helper">Nome completo</FormHelperText>
        </FormControl>
      }
      

      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
      </form>
    </Container>
  );
};

export default Form;
