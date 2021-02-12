import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

const Login = () => {

  const [permission, setPermission] = useState<any>(false)

  const inputEmail = useRef<HTMLInputElement>(null)
  const inputpassword = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setPermission(true)
    }
  }, [])

  const login = () => {
    api.post('/users', {
      email: inputEmail.current?.value,
      password: inputpassword.current?.value
    })
      .then(response => {
        localStorage.setItem("accessToken", response.data.accessToken)
        setPermission(true)
      })
  }

  return (
    <>
      {
        permission
        ?
        <Redirect to="/products" />
        :
        <Container>
          <h1>ログイン</h1>
          <input type="email" ref={inputEmail} />
          <input type="password" ref={inputpassword} />
          <input type="submit" value="アクセス" onClick={login}/>
        </Container>
      }
    </>
  );
};

export default Login;
