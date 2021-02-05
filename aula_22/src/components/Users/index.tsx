import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api'

const Users = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    api.get('/users/1')
      .then(response => dispatch({ type: 'PULL_USERS', payload: response.data}))
  })

  const { name, username, email } = useSelector((state: any) => state.users)

  return (
    <>
      <p><strong>{name}</strong></p>
      <p>{username}</p>
      <p>{email}</p>
    </>
  );
}

export default Users;
