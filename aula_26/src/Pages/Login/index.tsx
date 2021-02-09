import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

const Login = () => {

  const [username] = useState<string>('tony')
  const [password] = useState<string>('stark')

  const [entry, setEntry] = useState<Boolean>(false)
  const [firstTry, setFirstTry] = useState<Boolean>(true)

  const inputUsername = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const login = () => {
    if (username == inputUsername.current?.value 
      && 
      password == inputPassword.current?.value) {
      setEntry(true)
    } else {
      setEntry(false)
      setFirstTry(false)
    }
  }

  console.log("Try to use 'tony' as username and 'stark' ad password 8)")

  return (
    <>
    <Helmet>
      <title>Login</title>
      <meta name="login" content="login"/>
    </Helmet>
    <Container>
      {
        entry
        ?
        <Redirect to="/private" />
        : 
        <div className="box">
          <h1>Login</h1>
          <input type="text" placeholder="Usuario" ref={inputUsername}/>
          <input type="password" placeholder="Senha" ref={inputPassword}/>
          <input type="submit" value="Login" onClick={login}/>
          {
            firstTry
            ? <p></p>
            : <p>Usuario ou senha invalida.tente novamente.</p>
          }
        </div>
      }
    </Container>
    </>
  );
};

export default Login;
